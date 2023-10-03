import { Entry } from "contentful";

export const cleanContentfulEntry = <T>(data: Entry) => {
  let result: any = {};
  const { fields, sys } = data;

  if (!fields) {
    // eslint-disable-next-line no-console
    console.log("Draft item: is not possible to show", data);
    return result;
  }

  result = {
    ...result,
    CONTENT_TYPE: sys?.contentType?.sys?.id,
    CONTENTFUL_ID: sys?.id,
    UPDATED_AT: sys?.updatedAt,
  };

  Object.keys(fields).forEach((key) => {
    const field = (fields as Record<string, any>)[key];
    if (Array.isArray(field)) {
      const hasFields = field.some((item: Entry<any>) => !!item.fields);
      const hasSys = field.some((item: Entry<any>) => !!item.sys);

      // Apply for Cloudinary images or other types of objects
      if (!hasFields && !hasSys) {
        result = { ...result, [key]: field };
        return;
      }
      // Validation for draft array entries
      if (!hasFields && hasSys) {
        // eslint-disable-next-line no-console
        //console.log("Draft items: are not possible to show", field);
        result[key] = null;
        return;
      }

      result = {
        ...result,
        [key]: field
          .map((item) => {
            //validate if item is a draft with cleanContentfulEntry in {}
            const cleanEntry = cleanContentfulEntry(item);
            if (!cleanEntry.CONTENT_TYPE) return undefined;
            return {
              ...cleanEntry,
              CONTENT_TYPE: item.sys?.contentType?.sys.id ?? null,
              CONTENTFUL_ID: item.sys?.id ?? null,
              UPDATED_AT: item.sys?.updatedAt ?? null,
            };
          })
          .filter((x) => x !== undefined),
      };
      return;
    }

    if (field?.fields) {
      result = {
        ...result,
        [key]: {
          ...cleanContentfulEntry(field),
          CONTENT_TYPE: field.sys?.contentType?.sys.id ?? null,
          CONTENTFUL_ID: field.sys?.id ?? null,
          UPDATED_AT: field.sys?.updatedAt ?? null,
        },
      };
      return;
    } else if (!field?.fields && field?.sys) {
      // eslint-disable-next-line no-console
      console.log("Draft item: is not possible to show", field);
      result[key] = null;
      return;
    }

    result[key] = field;
  });

  return result as T;
};
