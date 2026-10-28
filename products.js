/* ==========================================================================
   MIMI'S BAKERY — nội dung của website / website content
   --------------------------------------------------------------------------
   Đây là file DUY NHẤT cần sửa khi muốn đổi bánh, mô tả hay lời giới thiệu.
   This is the ONLY file you need to edit to change products or text.

   THÊM BÁNH MỚI / ADD A PRODUCT
     1. Bỏ ảnh vào thư mục  images/   (nên < 150 KB, ảnh vuông hoặc dọc)
     2. Copy nguyên một khối { ... } trong "products" bên dưới, dán thêm vào,
        rồi đổi id, category, image, tên và mô tả.
        (id: chữ thường, không dấu, dùng gạch ngang. VD: "banh-bong-lan")

   HẾT HÀNG / SOLD OUT:  đổi  available: true  →  available: false
   ĐỔI GIÁ / PRICES:     thêm dòng  price: "90.000đ",  vào khối sản phẩm
                         (để trống thì website không hiện giá)

   Lưu ý: giữ nguyên dấu phẩy, dấu ngoặc kép và dấu ngoặc nhọn.
   ========================================================================== */

window.BAKERY = {

  /* ---------- Nhóm bánh / categories (dùng cho các nút lọc) ---------- */
  categories: [
    { id: "all",     emoji: "🧺", vi: "Tất cả",       en: "All" },
    { id: "cookies", emoji: "🍪", vi: "Bánh quy",     en: "Cookies" },
    { id: "jams",    emoji: "🍯", vi: "Mứt & ngâm",   en: "Jams & preserves" },
    { id: "pies",    emoji: "🥧", vi: "Bánh nướng",   en: "Pies" },
    { id: "flan",    emoji: "🍮", vi: "Bánh flan",    en: "Flan" }
  ],

  /* ---------- Sản phẩm / products ---------- */
  products: [
    {
      id: "cookies-assorted",
      category: "cookies",
      image: "images/cookies-assorted.jpg",
      focus: "50% 50%",
      available: true,
      vi: {
        name: "Bánh quy mix",
        tag: "Hũ trái tim",
        desc: "Bánh quy đủ hình đủ màu, đựng trong hũ thủy tinh hình trái tim xinh xắn. Một hũ là đủ cho cả buổi trà chiều, hoặc làm quà tặng cũng rất hợp."
      },
      en: {
        name: "Assorted cookies",
        tag: "Heart jar",
        desc: "Cookies in all shapes and colours, packed in a cute heart-shaped glass jar. Perfect for an afternoon tea or as a little gift."
      }
    },
    {
      id: "cookies-strawberry",
      category: "cookies",
      image: "images/cookies-strawberry.jpg",
      focus: "50% 50%",
      available: true,
      vi: {
        name: "Bánh quy dâu",
        tag: "Vị dâu",
        desc: "Bánh quy tròn nhỏ vị dâu, nhâm nhi lúc nào cũng thấy vui miệng. Đóng hũ trái tim, buộc dây gai và gắn thẻ Mimi."
      },
      en: {
        name: "Strawberry cookies",
        tag: "Strawberry",
        desc: "Small round strawberry cookies that are easy to keep nibbling. Packed in a heart jar, tied with twine and tagged by Mimi."
      }
    },
    {
      id: "honey-kumquat",
      category: "jams",
      image: "images/honey-kumquat.jpg",
      focus: "50% 50%",
      available: true,
      vi: {
        name: "Quất ngâm mật ong",
        tag: "Homemade",
        desc: "Quất ngâm mật ong trong hũ thủy tinh gói giấy kraft. Pha với nước ấm là có ngay một ly thức uống thơm dịu."
      },
      en: {
        name: "Honey kumquat",
        tag: "Homemade",
        desc: "Kumquats preserved in honey, in a glass jar wrapped in kraft paper. Stir into warm water for a soothing drink."
      }
    },
    {
      id: "mut-tao",
      category: "jams",
      image: "images/mut-tao.jpg",
      focus: "50% 45%",
      available: true,
      vi: {
        name: "Mứt táo",
        tag: "Homemade",
        desc: "Mứt táo làm thủ công, đựng trong hũ trong suốt nắp bạc. Ăn kèm trà nóng hay ngày Tết đều hợp."
      },
      en: {
        name: "Apple jam (mứt táo)",
        tag: "Homemade",
        desc: "Handmade sweet apple preserve in a clear jar with a silver lid. Lovely with hot tea."
      }
    },
    {
      id: "apple-pie",
      category: "pies",
      image: "images/apple-pie.jpg",
      focus: "50% 62%",
      available: true,
      vi: {
        name: "Bánh táo nướng",
        tag: "Nướng mới",
        desc: "Bánh táo nướng vàng ruộm, viền bánh được ấn hoa văn tỉ mỉ, bên trong là nhân táo thơm."
      },
      en: {
        name: "Apple pie",
        tag: "Freshly baked",
        desc: "Golden baked apple pies with hand-crimped edges and a fragrant apple filling."
      }
    },
    {
      id: "flan",
      category: "flan",
      image: "images/flan.jpg",
      focus: "50% 58%",
      available: true,
      vi: {
        name: "Bánh flan",
        tag: "Mềm mịn",
        desc: "Bánh flan homemade mềm mịn, đựng trong cốc hồng xinh, có nắp đậy và muỗng đi kèm."
      },
      en: {
        name: "Homemade flan",
        tag: "Silky",
        desc: "Smooth homemade flan in a pretty pink cup, with a lid and a little spoon."
      }
    }
  ],

  /* ---------- Chữ trên website / site text ---------- */
  ui: {
    vi: {
      "brand": "Mimi's Bakery",
      "hero.title": "Bánh homemade, nướng bằng cả tình thương",
      "hero.sub": "Bánh quy, mứt, bánh táo và bánh flan — làm tại nhà, đóng gói xinh xắn, canh gác bởi một bé mèo tên Mimi.",
      "hero.cta": "Xem bánh",
      "hero.about": "Về Mimi",
      "hero.hint": "Thử chạm vào Mimi xem 🐾",

      "menu.title": "Hôm nay có gì?",
      "menu.sub": "Chạm vào món bánh để xem chi tiết.",
      "menu.soldout": "Hết hàng",
      "menu.empty": "Chưa có món nào ở mục này.",

      "modal.close": "Đóng",

      "quiz.title": "Bạn là món bánh nào?",
      "quiz.sub": "Trả lời 3 câu hỏi nhỏ, Mimi sẽ chọn bánh hợp với bạn.",
      "quiz.start": "Bắt đầu nào",
      "quiz.again": "Chơi lại",
      "quiz.see": "Xem",
      "quiz.q": "Câu",

      "about.title": "Về Mimi's Bakery",
      "about.p1": "Mimi's Bakery là tiệm bánh nhỏ làm tại nhà. Mỗi mẻ bánh được làm từ tốn, đóng gói cẩn thận và gửi đến bạn với tất cả sự yêu thương.",
      "about.p2": "Tiệm mang tên Mimi — chú mèo trắng đốm đen, linh vật đáng yêu của tiệm. Từ hũ bánh quy nhiều hình ngộ nghĩnh, mứt táo, bánh táo nướng vàng ruộm cho đến bánh flan mềm mịn, mọi thứ đều làm thủ công và đóng gói xinh xắn.",
      "about.p3": "Hy vọng mỗi hũ bánh nhỏ sẽ mang đến cho bạn một chút ngọt ngào trong ngày. Cảm ơn bạn đã ghé thăm tiệm của Mimi!",
      "about.caption": "Mimi — linh vật của tiệm 🐾",

      "footer": "Làm với 🧡 tại nhà · Mimi's Bakery",

      "mimi.say": [
        "Meo~ 🐾",
        "Mimi duyệt bánh này nha!",
        "Cho Mimi xin một miếng nhé?",
        "Gừ gừ… thơm quá đi",
        "Ghé xem bánh bên dưới nha!"
      ],

      "quiz.questions": [
        { q: "Cuối tuần lý tưởng của bạn là…",
          a: [
            { t: "Nằm dài xem phim cùng gối ôm", to: "flan" },
            { t: "Pha trà, tụ tập với hội bạn",  to: "cookies-assorted" },
            { t: "Đi dạo công viên hóng gió",    to: "apple-pie" },
            { t: "Mở nhạc, dọn nhà, nấu nướng",  to: "mut-tao" }
          ] },
        { q: "Bạn thích vị ngọt kiểu nào?",
          a: [
            { t: "Mềm mịn, tan trong miệng",    to: "flan" },
            { t: "Giòn giòn, nhai vui miệng",   to: "cookies-assorted" },
            { t: "Thơm ấm, vỏ bánh xốp",        to: "apple-pie" },
            { t: "Dẻo dẻo, đậm đà",             to: "mut-tao" }
          ] },
        { q: "Chọn một người bạn đồng hành:",
          a: [
            { t: "Một chú mèo ngủ ngày",         to: "flan" },
            { t: "Playlist yêu thích",           to: "cookies-assorted" },
            { t: "Chiếc xe đạp cũ",              to: "apple-pie" },
            { t: "Một cuốn sách hay",            to: "mut-tao" }
          ] }
      ],
      "quiz.results": {
        "flan":             "Bạn là Bánh flan! Dịu dàng, mềm mại, ai gặp cũng thấy dễ chịu.",
        "cookies-assorted": "Bạn là Bánh quy! Vui vẻ, nhiều màu sắc, đi đâu cũng làm cả nhóm cười.",
        "apple-pie":        "Bạn là Bánh táo! Ấm áp, chu đáo, mang lại cảm giác như về nhà.",
        "mut-tao":          "Bạn là Mứt táo! Điềm đạm, ngọt ngào theo kiểu từ tốn và bền lâu."
      }
    },

    en: {
      "brand": "Mimi's Bakery",
      "hero.title": "Homemade treats, baked with love",
      "hero.sub": "Cookies, jam, apple pie and flan — made at home, packed with care, supervised by a cat named Mimi.",
      "hero.cta": "See the treats",
      "hero.about": "About Mimi",
      "hero.hint": "Try tapping Mimi 🐾",

      "menu.title": "What's baking today?",
      "menu.sub": "Tap a treat to see the details.",
      "menu.soldout": "Sold out",
      "menu.empty": "Nothing here yet.",

      "modal.close": "Close",

      "quiz.title": "Which treat are you?",
      "quiz.sub": "Answer 3 tiny questions and Mimi will pick your match.",
      "quiz.start": "Let's go",
      "quiz.again": "Play again",
      "quiz.see": "See",
      "quiz.q": "Question",

      "about.title": "About Mimi's Bakery",
      "about.p1": "Mimi's Bakery is a small home bakery. Every batch is made slowly, packed carefully and sent to you with lots of love.",
      "about.p2": "The bakery is named after Mimi — a white cat with black patches and our adorable mascot. From jars of cookies in funny shapes, apple jam and golden apple pies to silky flan, everything is handmade and prettily packed.",
      "about.p3": "We hope every little jar brings you a bit of sweetness today. Thank you for visiting Mimi's bakery!",
      "about.caption": "Mimi — our mascot 🐾",

      "footer": "Made with 🧡 at home · Mimi's Bakery",

      "mimi.say": [
        "Meow~ 🐾",
        "Mimi approves this treat!",
        "Can Mimi have a bite?",
        "Purr… smells so good",
        "Check out the treats below!"
      ],

      "quiz.questions": [
        { q: "Your perfect weekend is…",
          a: [
            { t: "Movie marathon with a big pillow", to: "flan" },
            { t: "Tea and a gossip with friends",    to: "cookies-assorted" },
            { t: "A stroll in the park",             to: "apple-pie" },
            { t: "Music on, cleaning and cooking",   to: "mut-tao" }
          ] },
        { q: "What kind of sweet do you like?",
          a: [
            { t: "Smooth, melts in your mouth", to: "flan" },
            { t: "Crunchy and fun to nibble",   to: "cookies-assorted" },
            { t: "Warm, with flaky pastry",     to: "apple-pie" },
            { t: "Chewy and rich",              to: "mut-tao" }
          ] },
        { q: "Pick a travel buddy:",
          a: [
            { t: "A sleepy cat",        to: "flan" },
            { t: "Favourite playlist",  to: "cookies-assorted" },
            { t: "An old bicycle",      to: "apple-pie" },
            { t: "A good book",         to: "mut-tao" }
          ] }
      ],
      "quiz.results": {
        "flan":             "You're Flan! Gentle, soft and easy to be around.",
        "cookies-assorted": "You're Cookies! Cheerful and colourful — you make the whole group laugh.",
        "apple-pie":        "You're Apple Pie! Warm and caring, you feel like coming home.",
        "mut-tao":          "You're Apple Jam! Calm and sweet in a slow, lasting way."
      }
    }
  }
};
