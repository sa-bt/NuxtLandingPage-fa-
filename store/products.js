export default {
  state() {
    return {
      products: [
        {
          id: "1",
          name: "گوشی موبایل شیائومی",
          description: "گوشی موبایل شیائومی مدل POCO X3 Pro M2102J20SG دو سیم‌ کارت ظرفیت 256 گیگابایت و 8 گیگابایت رم",
          image: "https://dkstatics-public.digikala.com/digikala-products/77f6b5b39b58f0b81c7707e3626f55b74ee348aa_1623857594.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          price: "7000000",
        },
        {
          id: "2",
          name: "گوشی موبایل سامسونگ",
          description: "گوشی موبایل سامسونگ مدل Galaxy A32 SM-A325F/DS دو سیم‌کارت ظرفیت 128 گیگابایت و رم 6 گیگابایت",
          image: "https://dkstatics-public.digikala.com/digikala-products/1aaa7ff34f7bec773c4baea959b652ed5dff9f30_1619596674.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          price: "8000000",
        },
        {
          id: "3",
          name: "گوشی موبایل اپل",
          description: "گوشی موبایل اپل مدل iPhone 12 Pro Max A2412 دو سیم‌ کارت ظرفیت 256 گیگابایت",
          image: "https://dkstatics-public.digikala.com/digikala-products/be7a0e9bf7866759fa3cea7648b149f589a01040_1607433995.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          price: "35000000",
        }, {
          id: "1",
          name: "گوشی موبایل شیائومی",
          description: "گوشی موبایل شیائومی مدل POCO X3 Pro M2102J20SG دو سیم‌ کارت ظرفیت 256 گیگابایت و 8 گیگابایت رم",
          image: "https://dkstatics-public.digikala.com/digikala-products/77f6b5b39b58f0b81c7707e3626f55b74ee348aa_1623857594.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          price: "7000000",
        },
        {
          id: "2",
          name: "گوشی موبایل سامسونگ",
          description: "گوشی موبایل سامسونگ مدل Galaxy A32 SM-A325F/DS دو سیم‌کارت ظرفیت 128 گیگابایت و رم 6 گیگابایت",
          image: "https://dkstatics-public.digikala.com/digikala-products/1aaa7ff34f7bec773c4baea959b652ed5dff9f30_1619596674.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          price: "8000000",
        },
        {
          id: "3",
          name: "گوشی موبایل اپل",
          description: "گوشی موبایل اپل مدل iPhone 12 Pro Max A2412 دو سیم‌ کارت ظرفیت 256 گیگابایت",
          image: "https://dkstatics-public.digikala.com/digikala-products/be7a0e9bf7866759fa3cea7648b149f589a01040_1607433995.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          price: "35000000",
        },
      ]
    }
  },
  getters: {
    allProducts(state) {
      return state.products;
    }
  }
};
