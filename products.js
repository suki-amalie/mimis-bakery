
/* ==========================================================================
   MIMI'S BAKERY — Nội dung website

   THÊM SẢN PHẨM
     1. Bỏ ảnh vào thư mục images/.
     2. Sao chép một khối sản phẩm bên dưới và chỉnh sửa.
     3. Đặt id bằng chữ thường, không dấu, dùng gạch ngang.

   ĐỔI GIÁ
     Sửa trường price của sản phẩm, ví dụ: price: "170.000đ".
   ========================================================================== */

window.BAKERY = {
  /* ---------- Danh mục sản phẩm ---------- */
  categories: [
    { id: "all", emoji: "🧺", vi: "Tất cả" },
    { id: "cookies", emoji: "🍪", vi: "Bánh quy" },
    { id: "jams", emoji: "🍯", vi: "Mứt" },
    { id: "pies", emoji: "🥧", vi: "Bánh nướng" },
    { id: "flan", emoji: "🍮", vi: "Bánh flan" }
  ],

  /* ---------- Sản phẩm ---------- */
  products: [
    {
      id: "cookies-assorted",
      category: "cookies",
      image: "images/assorted cat cookies.jpeg",
      focus: "50% 50%",
      price: "220.000đ",
      vi: {
        name: "Bánh quy mix",
        desc: "Hũ bánh quy kết hợp bốn vị vanilla, chocolate, matcha và strawberry - mỗi vị mang một hương vị riêng, thích hợp để thưởng thức cùng trà hoặc làm quà tặng."
      }
    },
    {
      id: "cookies-vanilla",
      category: "cookies",
      image: "images/vanilla cat cookies.jpeg",
      focus: "50% 50%",
      price: "180.000đ / hũ 220g",
      vi: {
        name: "Bánh quy vanilla",
        desc: "Bánh quy vanilla thơm dịu, sử dụng bơ Emborg từ Bỉ và Organic Bourbon Vanilla Extract của Pháp."
      }
    },
    {
      id: "cookies-orange",
      category: "cookies",
      image: "images/orange cat cookies.jpeg",
      focus: "50% 50%",
      price: "200.000đ",
      vi: {
        name: "Bánh quy cam",
        desc: "Làm từ vỏ cam tươi, bánh thơm mùi cam với vị chua ngọt nhẹ nhàng. Khi nướng, hương cam lan tỏa tươi mát, gợi nhớ đến mùi viên vitamin C sủi bọt."
      }
    },
    {
      id: "cookies-hojicha",
      category: "cookies",
      image: "images/cookies-hojicha.jpg",
      focus: "50% 50%",
      price: "200.000đ",
      vi: {
        name: "Bánh quy hojicha",
        desc: "Bánh quy vị hojicha với hương trà rang đặc trưng, thích hợp để nhâm nhi cùng một tách trà."
      }
    },
    {
      id: "cookies-chocolate",
      category: "cookies",
      image: "images/chocolate cat cookies.jpeg",
      focus: "50% 50%",
      price: "210.000đ",
      vi: {
        name: "Bánh quy chocolate",
        desc: "Bánh quy chocolate với hương vị cacao đậm đà, dành cho những ai yêu thích vị chocolate."
      }
    },
    {
      id: "cookies-matcha",
      category: "cookies",
      image: "images/matcha cat cookies.jpeg",
      focus: "50% 50%",
      price: "220.000đ",
      vi: {
        name: "Bánh quy matcha",
        desc: "Bánh quy matcha với hương trà xanh đặc trưng, mang đến vị trà thanh nhẹ trong từng chiếc bánh."
      }
    },
    {
      id: "cookies-strawberry",
      category: "cookies",
      image: "images/strawberry cat cookies.jpeg",
      focus: "50% 50%",
      price: "240.000đ",
      vi: {
        name: "Bánh quy strawberry",
        desc: "Sử dụng bột dâu tây 100% từ dâu tây. Bánh có hương dâu tự nhiên và vị chua nhẹ đặc trưng của dâu."
      }
    },
    {
      id: "mut-tao",
      category: "jams",
      image: "images/mut-tao.jpg",
      focus: "50% 45%",
      price: "170.000đ / hũ 500g",
      vi: {
        name: "Mứt táo",
        desc: "Mứt táo làm thủ công, hũ thủy tinh, ăn kèm bánh quy hoặc thưởng thức cùng trà nóng đều hợp."
      }
    },
    {
      id: "honey-kumquat",
      category: "jams",
      image: "images/honey kumquat.jpeg",
      focus: "50% 50%",
      vi: {
        name: "Quất ngâm mật ong",
        desc: "Quất ngâm mật ong trong hũ thủy tinh. Pha với nước ấm là có ngay một ly thức uống thơm dịu."
      }
    },
    {
      id: "apple-pie",
      category: "pies",
      image: "images/apple-pie.jpg",
      focus: "50% 62%",
      vi: {
        name: "Bánh táo nướng",
        desc: "Bánh táo nướng vàng ruộm, bên trong là nhân táo thơm."
      }
    },
    {
      id: "flan",
      category: "flan",
      image: "images/flan.jpg",
      focus: "50% 58%",
      vi: {
        name: "Bánh flan",
        desc: "Bánh flan nhà làm mềm mịn."
      }
    }
  ],

  /* ---------- Nội dung website ---------- */
  ui: {
    vi: {
      "brand": "Mimi's Bakery",

      "hero.title": "Bánh homemade, nướng bằng cả tình thương",
      "hero.sub": "Bánh quy, mứt, bánh táo và bánh flan — làm tại nhà, đóng gói xinh xắn, canh gác bởi một bé mèo tên Mimi.",
      "hero.cta": "Xem bánh",
      "hero.about": "Về Mimi",
      "hero.hint": "Thử chạm vào Mimi xem 🐾",

      "menu.title": "Sản phẩm",
      "menu.sub": "Chạm vào món bánh để xem chi tiết.",
      "menu.empty": "Mục này chưa có sản phẩm.",

      "modal.close": "Đóng",

      "about.title": "Về Mimi's Bakery",
      "about.p1": "Mimi's Bakery là tiệm bánh nhỏ làm tại nhà. Mỗi mẻ bánh được làm từ tốn, đóng gói cẩn thận và gửi đến bạn với tất cả sự yêu thương.",
      "about.p2": "Tiệm mang tên Mimi - chú mèo trắng đốm đen, linh vật đáng yêu của tiệm. Từ những hũ bánh quy nhiều hương vị đến mứt táo, bánh táo nướng vàng ruộm và bánh flan mềm mịn, mỗi món đều được chăm chút và đóng gói cẩn thận.",
      "about.p3": "Hy vọng mỗi món bánh nhỏ sẽ mang đến cho bạn một chút ngọt ngào trong ngày. Cảm ơn bạn đã ghé thăm tiệm của Mimi!",
      "about.caption": "Mimi - linh vật của tiệm 🐾",

      "footer": "Làm với 🧡 tại nhà · Mimi's Bakery",

      "mimi.say": [
        "Meo~ 🐾",
        "Mimi duyệt bánh này nha!",
        "Cho Mimi xin một miếng nhé?",
        "Bánh thơm quá đi",
        "Ghé xem bánh bên dưới nha!"
      ]
    }
  }
};
