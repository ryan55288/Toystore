import { useCartStore } from "@/store/cart";
import { useMyFavourStore } from "@/store/my-favour";

export function useProduct(productDetail) {
  const router = useRouter();
  const cartStore = useCartStore();
  const { addNewProduct, cartState, addDirectProduct } = cartStore;

  const myFavourStore = useMyFavourStore();
  const { addMyFavourList, cancelMyFavour } = myFavourStore;
  const { getMyFavourList } = storeToRefs(myFavourStore);
  const isFavour = computed(() => {
    const getProductIds = getMyFavourList.value.map((prod) => prod.id);
    return getProductIds.includes(productDetail.value.id);
  });
  const messageShow = ref(false);

  const addFavourHandle = () => {
    messageShow.value = true;
    addMyFavourList(productDetail.value);
    setTimeout(() => {
      messageShow.value = false;
    }, 1000);
  };
  const cancelFavourHandle = () => {
    cancelMyFavour(productDetail.value.id);
  };
  const increment = () => productDetail.value.qty++;
  const decrement = () => {
    if (productDetail.value.qty > 0) {
      productDetail.value.qty--;
    }
  };
  const validate = () => {
    if (!productDetail.value.qty) {
      errorAlert("請輸入數量");
      return false;
    }
    return true;
  };
  const addToCart = () => {
    if (!validate()) return;
    addNewProduct(productDetail.value);
    toastSuccess(
      `${productDetail.value.name}\n數量${productDetail.value.qty}\n成功加入購物車!`
    );
    productDetail.value.qty = 0;
    console.log(cartState.cartList);
  };

  const directBuy = () => {
    if (!validate()) return;
    addDirectProduct(productDetail.value);
    productDetail.value.qty = 0;
    router.push({
      path: "/CheckList1",
      query: {
        isDirect: "direct",
      },
    });
  };
  return {
    increment,
    decrement,
    isFavour,
    addFavourHandle,
    cancelFavourHandle,
    messageShow,
    addToCart,
    directBuy,
  };
}
