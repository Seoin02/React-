import CONSTANTS from "../constants/constants";

const productsURL = `${CONSTANTS.IS_DEV ? `/proxy` : `${import.meta.env.VITE_FAKE_STORE_API}`}/products`;

/**
 * productList는 API 1회 요청 후에 유지됩니다.
 * 디테일 페이지에서는 productDetail/id로 각각 호출하셔도 무방합니다.
 */
// export const productsList = selector<IProduct[]>({
//   key: "productsList",
//   get: async () => {
//     try {
//       const response = await fetch(productsURL);
//       return (await response.json()) || [];
//     } catch (error) {
//       console.log(`Error: ${error}`);
//       return [];
//     }
//   },
// });
