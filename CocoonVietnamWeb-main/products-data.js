(function () {
  const products = [
    {
      id: 'sen-hau-giang',
      title: 'Tinh Chất Xịt Dưỡng Sen Hậu Giang 200ml',
      subtitle: 'Cấp ẩm tức thì, cho da căng bóng',
      tagline: 'Tinh chất hai tầng giúp da ẩm mượt và rạng rỡ suốt ngày dài.',
      description: 'Sản phẩm có kết cấu hai tầng dầu dưỡng và tinh chất hòa quyện. Công thức kết hợp chiết xuất sen hữu cơ Hậu Giang, phức hợp prebiotics và squalane giúp cấp ẩm sâu, tăng cường độ bóng khỏe tự nhiên và bảo vệ hàng rào độ ẩm cho da nhạy cảm.',
      price: '368.000 đ',
      priceValue: 368000,
      image: 'images/Tinh chất xịt dưỡng sen hậu giang full hd.jpg',
      alt: 'Tinh chất xịt dưỡng sen Hậu Giang',
      breadcrumb: 'Tinh Chất Xịt Dưỡng Sen Hậu Giang'
    },
    {
      id: 'gel-khuynh-diep',
      title: 'Gel Tắm Khuynh Diệp & Bạc Hà 500ml',
      subtitle: 'Làm dịu da, mát lành tức thì',
      tagline: 'Làm sạch nhẹ nhàng và giữ da mềm mượt sau mỗi lần tắm.',
      description: 'Gel tắm khuynh diệp và bạc hà mang lại cảm giác mát dịu, hỗ trợ làm sạch cơ thể mà không gây khô căng. Kết cấu dịu nhẹ phù hợp với làn da cần cấp ẩm và thư giãn mỗi ngày.',
      price: '241.000 đ',
      priceValue: 241000,
      oldPrice: '320.000 đ',
      image: 'images/gel tắm full hd.jpg',
      alt: 'Gel tắm khuynh diệp và bạc hà',
      breadcrumb: 'Gel Tắm Khuynh Diệp & Bạc Hà'
    },
    {
      id: 'chong-nang-bidao',
      title: 'Kem Chống Nắng Bí Đao SPF 50+ PA++++ 50ml',
      subtitle: 'Bảo vệ da, thoáng nhẹ mỗi ngày',
      tagline: 'Quang phổ rộng giúp bảo vệ da trước nắng gắt và ô nhiễm đô thị.',
      description: 'Kem chống nắng bí đao quang phổ rộng với chỉ số SPF 50+ PA++++ giúp bảo vệ da hiệu quả trước tia UVA và UVB. Chất kem ráo nhẹ, dễ tán, phù hợp sử dụng hằng ngày cho da dầu và da hỗn hợp.',
      price: '388.000 đ',
      priceValue: 388000,
      image: 'images/Kem chống nắng bí đao quang phổ rộng, bảo vệ rất cao SPF 50 +, PA ++++ 50ml giá 388.000.jpg',
      alt: 'Kem chống nắng bí đao SPF 50+ PA++++',
      breadcrumb: 'Kem Chống Nắng Bí Đao'
    },
    {
      id: 'tay-da-chet-moi',
      title: 'Cà Phê Đắk Lắk Làm Sạch Da Chết Môi 5g',
      subtitle: 'Môi mềm mịn, giảm bong tróc',
      tagline: 'Tẩy da chết môi dịu nhẹ để son lên màu mượt mà hơn.',
      description: 'Sản phẩm tẩy da chết môi từ cà phê Đắk Lắk nguyên chất hỗ trợ làm mềm lớp sừng, giúp bề mặt môi mịn màng hơn và hạn chế tình trạng khô ráp, bong tróc.',
      price: '74.000 đ',
      priceValue: 74000,
      image: 'images/Cà phê Đắk Lắk làm sạch da chết môi 5g hd.jpg',
      alt: 'Cà phê Đắk Lắk làm sạch da chết môi',
      breadcrumb: 'Làm Sạch Da Chết Môi Cà Phê Đắk Lắk'
    },
    {
      id: 'tay-da-chet-mat-cafe',
      title: 'Cà Phê Đắk Lắk Làm Sạch Da Chết Mặt 150ml',
      subtitle: 'Da mịn hơn sau mỗi lần rửa',
      tagline: 'Làm sạch lớp da chết xỉn màu, giúp da sáng và mượt hơn.',
      description: 'Sản phẩm tẩy da chết mặt với hạt cà phê Đắk Lắk giúp lấy đi tế bào chết, hỗ trợ làm thông thoáng bề mặt da và mang lại cảm giác sạch mịn, tươi mới.',
      price: '172.000 đ',
      priceValue: 172000,
      image: 'images/Cà phê Đắk Lắk làm sạch da chết mặt 150ml giá 172.000.jpg',
      alt: 'Cà phê Đắk Lắk làm sạch da chết mặt',
      breadcrumb: 'Làm Sạch Da Chết Mặt Cà Phê Đắk Lắk'
    },
    {
      id: 'mat-na-bi-dao',
      title: 'Mặt Nạ Bí Đao 100ml',
      subtitle: 'Làm dịu nhanh, hỗ trợ giảm dầu',
      tagline: 'Mặt nạ chăm sóc da bí đao cho làn da cần thư giãn và cân bằng.',
      description: 'Mặt nạ bí đao hỗ trợ làm dịu làn da đang mệt mỏi, giảm cảm giác bí bách và giúp bề mặt da trở nên thông thoáng, tươi mát hơn sau khi sử dụng.',
      price: '339.000 đ',
      priceValue: 339000,
      image: 'images/Mặt nạ bí đao 100ml giá 339.00.jpg',
      alt: 'Mặt nạ bí đao 100ml',
      breadcrumb: 'Mặt Nạ Bí Đao'
    },
    {
      id: 'mat-na-nghe-hung-yen',
      title: 'Mặt Nạ Nghệ Hưng Yên 30ml',
      subtitle: 'Nuôi dưỡng da đều màu hơn',
      tagline: 'Mặt nạ nghệ giúp da trông tươi sáng và khỏe khoắn hơn.',
      description: 'Mặt nạ nghệ Hưng Yên bổ sung cảm giác mềm mịn và hỗ trợ cải thiện vẻ ngoài xỉn màu của da. Kết cấu dễ tán, phù hợp cho bước chăm sóc chuyên sâu tại nhà.',
      price: '152.000 đ',
      priceValue: 152000,
      image: 'images/Mặt nạ nghệ Hưng Yên 30ml giá 152.000.jpg',
      alt: 'Mặt nạ nghệ Hưng Yên 30ml',
      breadcrumb: 'Mặt Nạ Nghệ Hưng Yên'
    },
    {
      id: 'tay-trang-sen-hau-giang',
      title: 'Nước Tẩy Trang Sen Hậu Giang 140ml',
      subtitle: 'Làm sạch dịu nhẹ cho da nhạy cảm',
      tagline: 'Tẩy trang êm dịu, giữ da sạch thoáng mà không khô căng.',
      description: 'Nước tẩy trang sen Hậu Giang giúp loại bỏ lớp bụi bẩn, kem chống nắng và lớp trang điểm nhẹ nhàng. Công thức phù hợp cho làn da cần sự dịu nhẹ trong bước làm sạch đầu tiên.',
      price: '152.000 đ',
      priceValue: 152000,
      image: 'images/Nước tẩy trang sen Hậu Giang 140ml giá 152.000.jpg',
      alt: 'Nước tẩy trang sen Hậu Giang 140ml',
      breadcrumb: 'Nước Tẩy Trang Sen Hậu Giang'
    },
    {
      id: 'tay-trang-bi-dao',
      title: 'Nước Tẩy Trang Bí Đao 1000ml',
      subtitle: 'Dung tích lớn cho routine mỗi ngày',
      tagline: 'Làm sạch nhanh, hỗ trợ da thông thoáng và dễ chịu hơn.',
      description: 'Nước tẩy trang bí đao dung tích lớn phù hợp cho nhu cầu sử dụng thường xuyên. Sản phẩm hỗ trợ làm sạch bụi bẩn và dầu thừa, mang lại cảm giác tươi thoáng sau mỗi lần lau.',
      price: '535.000 đ',
      priceValue: 535000,
      image: 'images/Nước tẩy trang bí đao 1000 ml giá 535.000.jpg',
      alt: 'Nước tẩy trang bí đao 1000ml',
      breadcrumb: 'Nước Tẩy Trang Bí Đao'
    },
    {
      id: 'sap-duong-am-sen',
      title: 'Sáp Dưỡng Ẩm Đa Năng Sen Hậu Giang 30ml',
      subtitle: 'Khóa ẩm nhanh cho vùng da khô',
      tagline: 'Sáp dưỡng đa năng tiện mang theo để chăm sóc da mọi lúc.',
      description: 'Sáp dưỡng ẩm đa năng với chiết xuất sen Hậu Giang hỗ trợ làm mềm các vùng da khô như môi, khuỷu tay và vùng da thô ráp. Kết cấu đặc nhưng dễ tán, tạo cảm giác dễ chịu khi dùng.',
      price: '192.000 đ',
      priceValue: 192000,
      image: 'images/Sáp dưỡng ẩm đa năng sen Hậu Giang 30ml giá 192.000.jpg',
      alt: 'Sáp dưỡng ẩm đa năng sen Hậu Giang 30ml',
      breadcrumb: 'Sáp Dưỡng Ẩm Đa Năng Sen Hậu Giang'
    },
    {
      id: 'sua-rua-mat-nghe-hung-yen',
      title: 'Sữa Rửa Mặt Nghệ Hưng Yên 310ml',
      subtitle: 'Làm sạch êm, da vẫn mềm mượt',
      tagline: 'Bọt rửa dịu nhẹ cho bước làm sạch hằng ngày thoải mái hơn.',
      description: 'Sữa rửa mặt nghệ Hưng Yên giúp cuốn trôi bụi bẩn và bã nhờn mà vẫn duy trì cảm giác da mềm ẩm. Sản phẩm phù hợp cho chu trình làm sạch sáng và tối.',
      price: '299.000 đ',
      priceValue: 299000,
      image: 'images/Sữa rửa mặt nghệ Hưng Yên 310ml giá 299.000.jpg',
      alt: 'Sữa rửa mặt nghệ Hưng Yên 310ml',
      breadcrumb: 'Sữa Rửa Mặt Nghệ Hưng Yên'
    },
    {
      id: 'sua-rua-mat-sen-hau-giang',
      title: 'Sữa Rửa Mặt Sen Hậu Giang 310ml',
      subtitle: 'Làm sạch dịu và giữ ẩm tốt',
      tagline: 'Làm sạch sâu nhưng vẫn êm ái cho da sau mỗi lần rửa mặt.',
      description: 'Sữa rửa mặt sen Hậu Giang phù hợp cho làn da cần bước làm sạch nhẹ nhàng. Công thức hỗ trợ loại bỏ bụi bẩn và dầu thừa mà không để lại cảm giác khô căng.',
      price: '339.000 đ',
      priceValue: 339000,
      image: 'images/Sữa rửa mặt sen Hậu Giang 310ml giá 339.000.jpg',
      alt: 'Sữa rửa mặt sen Hậu Giang 310ml',
      breadcrumb: 'Sữa Rửa Mặt Sen Hậu Giang'
    },
    {
      id: 'thach-bi-dao',
      title: 'Thạch Bí Đao 100ml',
      subtitle: 'Kết cấu mát dịu, thấm nhanh',
      tagline: 'Lớp thạch mỏng nhẹ cho cảm giác tươi mát và dễ chịu trên da.',
      description: 'Thạch bí đao có kết cấu mỏng nhẹ, phù hợp cho những ngày thời tiết nóng ẩm hoặc khi làn da cần cảm giác dịu mát. Sản phẩm hỗ trợ cấp ẩm mà không gây nặng mặt.',
      price: '378.000 đ',
      priceValue: 378000,
      image: 'images/Thạch bí đao 100ml giá 378.000.jpg',
      alt: 'Thạch bí đao 100ml',
      breadcrumb: 'Thạch Bí Đao'
    },
    {
      id: 'thach-hoa-hong',
      title: 'Thạch Hoa Hồng Dưỡng Ẩm 100ml',
      subtitle: 'Dưỡng ẩm mềm mượt cho da',
      tagline: 'Chất thạch hoa hồng giúp da ẩm mịn và dễ chịu hơn mỗi ngày.',
      description: 'Thạch hoa hồng dưỡng ẩm mang lại cảm giác mềm mại, mịn mượt cho da với kết cấu mỏng nhẹ, dễ tán. Phù hợp để bổ sung độ ẩm cho làn da thiếu nước.',
      price: '378.000 đ',
      priceValue: 378000,
      image: 'images/Thạch hoa hồng dưỡng ẩm 100ml giá 378.000.jpg',
      alt: 'Thạch hoa hồng dưỡng ẩm 100ml',
      breadcrumb: 'Thạch Hoa Hồng Dưỡng Ẩm'
    },
    {
      id: 'tinh-chat-bi-dao-n15',
      title: 'Tinh Chất Bí Đao N15 70ml',
      subtitle: 'Hỗ trợ da thông thoáng và mịn hơn',
      tagline: 'Tinh chất bí đao chuyên sâu cho routine chăm da hằng ngày.',
      description: 'Tinh chất bí đao N15 được thiết kế cho nhu cầu chăm sóc da chuyên sâu, hỗ trợ làm da trông mịn hơn và thông thoáng hơn. Kết cấu thấm nhanh, dễ kết hợp với các bước dưỡng tiếp theo.',
      price: '486.000 đ',
      priceValue: 486000,
      image: 'images/Tinh chất bí đao N15 70ml giá 486.000.jpg',
      alt: 'Tinh chất bí đao N15 70ml',
      breadcrumb: 'Tinh Chất Bí Đao N15'
    },
    {
      id: 'tinh-chat-nghe-c22',
      title: 'Tinh Chất Nghệ Hưng Yên C22 30ml',
      subtitle: 'Chăm sóc làn da xỉn màu',
      tagline: 'Tinh chất cô đặc giúp da tươi sáng và đều màu hơn.',
      description: 'Tinh chất nghệ Hưng Yên C22 hỗ trợ chăm sóc làn da xỉn màu với kết cấu thấm nhanh, mỏng nhẹ. Phù hợp để bổ sung vào chu trình dưỡng da cần sự rạng rỡ và mềm mượt.',
      price: '457.000 đ',
      priceValue: 457000,
      image: 'images/Tinh chất nghệ Hưng Yên C22 30ml giá 457.000.jpg',
      alt: 'Tinh chất nghệ Hưng Yên C22 30ml',
      breadcrumb: 'Tinh Chất Nghệ Hưng Yên C22'
    },
    {
      id: 'xit-khoang-nghe-hung-yen',
      title: 'Xịt Khoáng Nghệ Hưng Yên 130ml',
      subtitle: 'Cấp ẩm nhanh, làm tươi da',
      tagline: 'Xịt khoáng tiện lợi cho những lúc da cần được làm dịu ngay.',
      description: 'Xịt khoáng nghệ Hưng Yên giúp bổ sung độ ẩm tức thì, hỗ trợ làm dịu cảm giác khô căng và giữ da tươi mát trong suốt ngày dài. Phù hợp dùng trước hoặc sau trang điểm.',
      price: '212.000 đ',
      priceValue: 212000,
      image: 'images/Xịt khoáng nghệ Hưng Yên 130ml giá 212.000.jpg',
      alt: 'Xịt khoáng nghệ Hưng Yên 130ml',
      breadcrumb: 'Xịt Khoáng Nghệ Hưng Yên'
    }
  ];

  const productMap = products.reduce((map, product) => {
    map[product.id] = product;
    return map;
  }, {});

  function formatPrice(amount) {
    return `${Number(amount).toLocaleString('vi-VN')} đ`;
  }

  window.PRODUCTS = products;
  window.PRODUCTS_MAP = productMap;
  window.CATALOG_FORMAT_PRICE = formatPrice;
})();