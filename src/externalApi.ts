import { NUTRI_PATROL_URL, NUTRI_PATROL_PRODUCT_URL } from "./const";

export const addImageFlag = (opts: { barcode: string; imgid: number }) => {
  const { barcode, imgid } = opts;
  const imgidStr = imgid?.toString() || "";
  const NutriPatrolURL =
    `${NUTRI_PATROL_URL}?` +
    new URLSearchParams({
      barcode: barcode || "",
      image_id: imgidStr || "",
      source: "web",
      flavor: "off",
    }).toString();
  try {
    window.open(NutriPatrolURL, "_blank", "noopener,noreferrer");
  } catch (error) {
    throw new Error("Could not open NutriPatrol", { cause: error });
  }
};

export const addProductFlag = (opts: { barcode: string }) => {
  const { barcode } = opts;
  const NutriPatrolURL =
    `${NUTRI_PATROL_PRODUCT_URL}?` +
    new URLSearchParams({
      barcode: barcode || "",
      source: "web",
      flavor: "off",
    }).toString();
  try {
    window.open(NutriPatrolURL, "_blank", "noopener,noreferrer");
  } catch (error) {
    throw new Error("Could not open NutriPatrol", { cause: error });
  }
};

const externalApi = {
  addImageFlag,
  addProductFlag,
};

export default externalApi;
