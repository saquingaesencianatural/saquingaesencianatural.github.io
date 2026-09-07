const productos = [
    {
        id: 1,
        nombre: "Crema hidratante natural",
        categoria: "Cuidado facial",
        precio: 8.50,
        stock: 15,
        imagen: "img/crema-hidratante.jpg",
        descripcion: "Crema hidratante para el cuidado diario de la piel.",
        beneficios: "Ayuda a mantener la piel suave, hidratada y saludable."
    },

    {
        id: 2,
        nombre: "Jabón artesanal de avena",
        categoria: "Higiene personal",
        precio: 4.00,
        stock: 20,
        imagen: "img/jabon-avena.jpg",
        descripcion: "Jabón elaborado con ingredientes naturales.",
        beneficios: "Limpia suavemente y ayuda a cuidar la piel."
    },

    {
        id: 3,
        nombre: "Shampoo herbal",
        categoria: "Cuidado del cabello",
        precio: 7.25,
        stock: 12,
        imagen: "img/shampoo-herbal.jpg",
        descripcion: "Shampoo con extractos naturales para el cabello.",
        beneficios: "Limpia y aporta frescura al cuero cabelludo."
    },

    {
        id: 4,
        nombre: "Perfume esencia floral",
        categoria: "Perfumería",
        precio: 12.00,
        stock: 10,
        imagen: "img/perfume-natural.jpg",
        descripcion: "Fragancia suave inspirada en aromas naturales.",
        beneficios: "Aroma agradable y duradero para uso diario."
    },

    {
        id: 5,
        nombre: "Exfoliante de café",
        categoria: "Cuidado corporal",
        precio: 6.75,
        stock: 8,
        imagen: "img/exfoliante.jpg",
        descripcion: "Exfoliante corporal elaborado con café natural.",
        beneficios: "Ayuda a retirar células muertas y suaviza la piel."
    },

    {
        id: 6,
        nombre: "Bálsamo labial natural",
        categoria: "Cuidado facial",
        precio: 3.50,
        stock: 25,
        imagen: "img/balsamo.jpg",
        descripcion: "Bálsamo protector para el cuidado de los labios.",
        beneficios: "Aporta hidratación y protección diaria."
    },

    {
        id: 7,
        nombre: "Crema corporal de coco",
        categoria: "Cuidado corporal",
        precio: 9.00,
        stock: 14,
        imagen: "img/crema-coco.jpg",
        descripcion: "Crema corporal con aroma suave de coco.",
        beneficios: "Hidrata la piel y ayuda a mantenerla suave."
    },

    {
        id: 8,
        nombre: "Gel antibacterial natural",
        categoria: "Higiene personal",
        precio: 3.75,
        stock: 30,
        imagen: "img/gel-antibacterial.jpg",
        descripcion: "Gel antibacterial para la higiene diaria.",
        beneficios: "Ayuda a mantener las manos limpias y frescas."
    },
    {
        id: 9,
        nombre: "Agua micelar",
        categoria: "Cuidado facial",
        precio: 7.80,
        stock: 16,
        imagen: "img/agua-micelar.jpg",
        descripcion: "Agua micelar para limpiar el rostro.",
        beneficios: "Retira impurezas y maquillaje."
    },
    {
        id: 10,
        nombre: "Tónico facial de rosas",
        categoria: "Cuidado facial",
        precio: 6.40,
        stock: 11,
        imagen: "img/tonico-rosas.jpg",
        descripcion: "Tónico facial con esencia de rosas.",
        beneficios: "Refresca y tonifica la piel."
    },
    {
        id: 11,
        nombre: "Mascarilla de arcilla verde",
        categoria: "Cuidado facial",
        precio: 8.20,
        stock: 9,
        imagen: "img/mascarilla-arcilla.jpg",
        descripcion: "Mascarilla facial de arcilla verde.",
        beneficios: "Ayuda a limpiar profundamente el rostro."
    },
    {
        id: 12,
        nombre: "Serum de vitamina C",
        categoria: "Cuidado facial",
        precio: 14.50,
        stock: 7,
        imagen: "img/serum-vitamina-c.jpg",
        descripcion: "Serum facial con vitamina C.",
        beneficios: "Aporta luminosidad y frescura a la piel."
    },
    {
        id: 13,
        nombre: "Protector solar facial",
        categoria: "Cuidado facial",
        precio: 15.00,
        stock: 13,
        imagen: "img/protector-solar.jpg",
        descripcion: "Protector solar para el cuidado del rostro.",
        beneficios: "Ayuda a proteger la piel del sol."
    },
    {
        id: 14,
        nombre: "Crema facial de vitamina E",
        categoria: "Cuidado facial",
        precio: 10.25,
        stock: 10,
        imagen: "img/crema-vitamina-e.jpg",
        descripcion: "Crema facial con vitamina E.",
        beneficios: "Ayuda a mantener la piel hidratada."
    },
    {
        id: 15,
        nombre: "Jabón facial de carbón",
        categoria: "Cuidado facial",
        precio: 5.25,
        stock: 15,
        imagen: "img/jabon-carbon.jpg",
        descripcion: "Jabón facial con carbón activado.",
        beneficios: "Ayuda a eliminar impurezas de nuestro rostro."
    },
    {
        id: 16,
        nombre: "Agua de rosas",
        categoria: "Cuidado facial",
        precio: 5.75,
        stock: 18,
        imagen: "img/agua-rosas.jpg",
        descripcion: "Agua refrescante con esencia de rosas.",
        beneficios: "Refresca y suaviza la piel."
    },
    {
        id: 17,
        nombre: "Crema para contorno de ojos",
        categoria: "Cuidado facial",
        precio: 13.00,
        stock: 6,
        imagen: "img/contorno-ojos.jpg",
        descripcion: "Crema ligera para el contorno de ojos.",
        beneficios: "Ayuda a hidratar la zona del contorno."
    },
    {
        id: 18,
        nombre: "Mascarilla de miel",
        categoria: "Cuidado facial",
        precio: 7.50,
        stock: 12,
        imagen: "img/mascarilla-miel.jpg",
        descripcion: "Mascarilla facial con extracto de miel.",
        beneficios: "Deja la piel suave y luminosa."
    },
    {
        id: 19,
        nombre: "Exfoliante facial de avena",
        categoria: "Cuidado facial",
        precio: 6.90,
        stock: 10,
        imagen: "img/exfoliante-avena.jpg",
        descripcion: "Exfoliante suave elaborado con avena.",
        beneficios: "Ayuda a limpiar y suavizar el rostro."
    },
    {
        id: 20,
        nombre: "Bálsamo facial nutritivo",
        categoria: "Cuidado facial",
        precio: 11.50,
        stock: 8,
        imagen: "img/balsamo-facial.jpg",
        descripcion: "Bálsamo nutritivo para el rostro.",
        beneficios: "Aporta hidratación y nutrición."
    },

    {
        id: 21,
        nombre: "Loción corporal de vainilla",
        categoria: "Cuidado corporal",
        precio: 8.75,
        stock: 15,
        imagen: "img/locion-vainilla.jpg",
        descripcion: "Loción corporal con aroma de vainilla.",
        beneficios: "Hidrata y perfuma suavemente la piel."
    },
    {
        id: 22,
        nombre: "Aceite corporal de almendras",
        categoria: "Cuidado corporal",
        precio: 10.50,
        stock: 12,
        imagen: "img/aceite-almendras.jpg",
        descripcion: "Aceite corporal elaborado con almendras.",
        beneficios: "Ayuda a mantener la piel suave."
    },
    {
        id: 23,
        nombre: "Manteca corporal de karité",
        categoria: "Cuidado corporal",
        precio: 12.25,
        stock: 9,
        imagen: "img/manteca-karite.jpg",
        descripcion: "Manteca corporal con karité.",
        beneficios: "Brinda hidratación intensa."
    },
    {
        id: 24,
        nombre: "Sales de baño relajantes",
        categoria: "Cuidado corporal",
        precio: 7.00,
        stock: 14,
        imagen: "img/sales-bano.jpg",
        descripcion: "Sales aromáticas para el baño.",
        beneficios: "Ayudan a crear un momento relajante."
    },
    {
        id: 25,
        nombre: "Crema de manos de lavanda",
        categoria: "Cuidado corporal",
        precio: 5.90,
        stock: 20,
        imagen: "img/crema-manos.jpg",
        descripcion: "Crema de manos con aroma de lavanda.",
        beneficios: "Hidrata y suaviza las manos."
    },
    {
        id: 26,
        nombre: "Crema para pies",
        categoria: "Cuidado corporal",
        precio: 6.25,
        stock: 13,
        imagen: "img/crema-pies.jpg",
        descripcion: "Crema refrescante para el cuidado de los pies.",
        beneficios: "Ayuda a suavizar la piel seca."
    },
    {
        id: 27,
        nombre: "Aceite de coco corporal",
        categoria: "Cuidado corporal",
        precio: 9.50,
        stock: 11,
        imagen: "img/aceite-coco.jpg",
        descripcion: "Aceite corporal con aroma natural de coco.",
        beneficios: "Ayuda a hidratar y suavizar la piel."
    },
    {
        id: 28,
        nombre: "Gel corporal refrescante",
        categoria: "Cuidado corporal",
        precio: 7.60,
        stock: 17,
        imagen: "img/gel-corporal.jpg",
        descripcion: "Gel refrescante para después del baño.",
        beneficios: "Aporta sensación de frescura."
    },
    {
        id: 29,
        nombre: "Crema corporal de cacao",
        categoria: "Cuidado corporal",
        precio: 9.25,
        stock: 12,
        imagen: "img/crema-cacao.jpg",
        descripcion: "Crema corporal con aroma de cacao.",
        beneficios: "Ayuda a nutrir la piel."
    },
    {
        id: 30,
        nombre: "Exfoliante corporal de azúcar",
        categoria: "Cuidado corporal",
        precio: 6.50,
        stock: 10,
        imagen: "img/exfoliante-azucar.jpg",
        descripcion: "Exfoliante corporal a base de azúcar.",
        beneficios: "Deja la piel suave y limpia."
    },
    {
        id: 31,
        nombre: "Bruma corporal de frutas",
        categoria: "Cuidado corporal",
        precio: 8.90,
        stock: 15,
        imagen: "img/bruma-frutas.jpg",
        descripcion: "Bruma corporal con aroma frutal.",
        beneficios: "Refresca y perfuma la piel."
    },
    {
        id: 32,
        nombre: "Jabón líquido corporal",
        categoria: "Cuidado corporal",
        precio: 7.20,
        stock: 18,
        imagen: "img/jabon-liquido.jpg",
        descripcion: "Jabón líquido para uso diario.",
        beneficios: "Limpia suavemente la piel."
    },
    {
        id: 33,
        nombre: "Crema corporal de aloe",
        categoria: "Cuidado corporal",
        precio: 8.80,
        stock: 14,
        imagen: "img/crema-corporal-aloe.jpg",
        descripcion: "Crema corporal con aloe vera.",
        beneficios: "Refresca e hidrata la piel."
    },
    {
        id: 34,
        nombre: "Masajeador corporal",
        categoria: "Cuidado corporal",
        precio: 10.00,
        stock: 7,
        imagen: "img/masajeador.jpg",
        descripcion: "Accesorio para masajes corporales.",
        beneficios: "Ayuda a relajar los músculos."
    },
    {
        id: 35,
        nombre: "Set corporal",
        categoria: "Cuidado corporal",
        precio: 22.00,
        stock: 5,
        imagen: "img/set-corporal.jpg",
        descripcion: "Set con crema, jabón y exfoliante.",
        beneficios: "Incluye productos para una rutina completa."
    },
    {
        id: 36,
        nombre: "Crema reafirmante corporal",
        categoria: "Cuidado corporal",
        precio: 13.50,
        stock: 8,
        imagen: "img/crema-reafirmante.jpg",
        descripcion: "Crema corporal de textura ligera.",
        beneficios: "Ayuda a mejorar la suavidad de la piel."
    },
    {
        id: 37,
        nombre: "Spray corporal de menta",
        categoria: "Cuidado corporal",
        precio: 7.80,
        stock: 16,
        imagen: "img/spray-menta.jpg",
        descripcion: "Spray corporal con aroma refrescante.",
        beneficios: "Aporta frescura durante el día."
    },
    {
        id: 38,
        nombre: "Bálsamo muscular",
        categoria: "Cuidado corporal",
        precio: 9.75,
        stock: 9,
        imagen: "img/balsamo-muscular.jpg",
        descripcion: "Bálsamo de uso corporal con aroma herbal.",
        beneficios: "Aporta sensación de relajación."
    },
    {
        id: 39,
        nombre: "Jabón de leche de cabra",
        categoria: "Cuidado corporal",
        precio: 5.25,
        stock: 18,
        imagen: "img/jabon-leche.jpg",
        descripcion: "Jabón artesanal de textura cremosa.",
        beneficios: "Limpia y ayuda a suavizar la piel."
    },
    {
        id: 40,
        nombre: "Kit de spa en casa",
        categoria: "Cuidado corporal",
        precio: 25.00,
        stock: 6,
        imagen: "img/kit-spa.jpg",
        descripcion: "Kit con productos para una rutina relajante.",
        beneficios: "Ideal para disfrutar un momento de bienestar."
    },

    {
        id: 41,
        nombre: "Acondicionador Johnsons",
        categoria: "Cuidado del cabello",
        precio: 7.50,
        stock: 14,
        imagen: "img/acondicionador-herbal.jpg",
        descripcion: "Acondicionador con extractos naturales.",
        beneficios: "Ayuda a desenredar y suavizar el cabello."
    },
    {
        id: 42,
        nombre: "Mascarilla capilar de Elvive",
        categoria: "Cuidado del cabello",
        precio: 9.80,
        stock: 10,
        imagen: "img/mascarilla-elvive.jpg",
        descripcion: "Mascarilla nutritiva para el cabello.",
        beneficios: "Ayuda a mantener el cabello hidratado."
    },
    {
        id: 43,
        nombre: "Aceite capilar de argán",
        categoria: "Cuidado del cabello",
        precio: 12.50,
        stock: 8,
        imagen: "img/aceite-argan.jpg",
        descripcion: "Aceite capilar de textura ligera.",
        beneficios: "Aporta brillo y suavidad al cabello."
    },
    {
        id: 44,
        nombre: "Shampoo de romero",
        categoria: "Cuidado del cabello",
        precio: 8.25,
        stock: 16,
        imagen: "img/shampoo-romero.jpg",
        descripcion: "Shampoo con extracto natural de romero.",
        beneficios: "Limpia y refresca el cuero cabelludo."
    },
    {
        id: 45,
        nombre: "Shampoo de manzanilla",
        categoria: "Cuidado del cabello",
        precio: 7.90,
        stock: 13,
        imagen: "img/shampoo-manzanilla.jpg",
        descripcion: "Shampoo con aroma suave de manzanilla.",
        beneficios: "Limpia suavemente el cabello."
    },
    {
        id: 46,
        nombre: "Acondicionador de aloe",
        categoria: "Cuidado del cabello",
        precio: 8.10,
        stock: 11,
        imagen: "img/acondicionador-aloe.jpg",
        descripcion: "Acondicionador con aloe vera.",
        beneficios: "Ayuda a hidratar y suavizar las puntas."
    },
    {
        id: 47,
        nombre: "Crema para peinar Pantene",
        categoria: "Cuidado del cabello",
        precio: 6.75,
        stock: 20,
        imagen: "img/crema-peinar.jpg",
        descripcion: "Crema ligera para peinar diariamente.",
        beneficios: "Facilita el peinado y reduce el frizz."
    },
    {
        id: 48,
        nombre: "Gel fijador herbal",
        categoria: "Cuidado del cabello",
        precio: 5.50,
        stock: 17,
        imagen: "img/gel-fijador.jpg",
        descripcion: "Gel fijador con aroma herbal.",
        beneficios: "Ayuda a mantener el peinado."
    },
    {
        id: 49,
        nombre: "Tónico capilar",
        categoria: "Cuidado del cabello",
        precio: 10.75,
        stock: 9,
        imagen: "img/tonico-capilar.jpg",
        descripcion: "Tónico para el cuidado del cuero cabelludo.",
        beneficios: "Aporta frescura y sensación de limpieza."
    },
    {
        id: 50,
        nombre: "Cepillo de bambú",
        categoria: "Cuidado del cabello",
        precio: 6.00,
        stock: 22,
        imagen: "img/cepillo-bambu.jpg",
        descripcion: "Cepillo elaborado con materiales naturales.",
        beneficios: "Ayuda a desenredar el cabello suavemente."
    }
];