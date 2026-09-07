/* ================================
   CARRITO DE COMPRAS
================================ */

let carrito = JSON.parse(
    localStorage.getItem("carrito")
) || [];


/* ================================
   FORMATO DE PRECIOS
================================ */

function formatoPrecio(precio) {
    return "$" + Number(precio).toFixed(2);
}


/* ================================
   CREAR MENÚ PRINCIPAL
================================ */

function crearHeader() {

    const header = document.getElementById("header");

    if (!header) {
        return;
    }

    header.innerHTML = `
        <nav class="navbar navbar-expand-lg">
            <div class="container">

                <a class="navbar-brand" href="index.html">
                    <i class="bi bi-flower1"></i>
                    Saquinga Esencia Natural
                </a>

                <button 
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#menuPrincipal"
                    aria-controls="menuPrincipal"
                    aria-expanded="false"
                    aria-label="Abrir menú">

                    <i class="bi bi-list"></i>

                </button>

                <div 
                    class="collapse navbar-collapse"
                    id="menuPrincipal">

                    <div class="navbar-nav ms-auto">

                        <a class="nav-link" href="index.html">
                            <i class="bi bi-house-fill"></i>
                            Inicio
                        </a>

                        <a class="nav-link" href="productos.html">
                            <i class="bi bi-bag-fill"></i>
                            Productos
                        </a>

                        <a class="nav-link" href="nosotros.html">
                            <i class="bi bi-people-fill"></i>
                            Nosotros
                        </a>

                        <a class="nav-link" href="contacto.html">
                            <i class="bi bi-envelope-fill"></i>
                            Contacto
                        </a>

                        <a class="nav-link" href="carrito.html">
                            <i class="bi bi-cart-fill"></i>
                            Carrito
                            (<span id="contador-carrito">0</span>)
                        </a>

                       

                    </div>

                </div>

            </div>
        </nav>
    `;
}


/* ================================
   CREAR PIE DE PÁGINA
================================ */

function crearFooter() {

    const footer = document.getElementById("footer");

    if (!footer) {
        return;
    }

    footer.innerHTML = `
        <div class="footer text-center py-4 mt-5">

            <div class="container">

                <h5>
                    <i class="bi bi-flower1"></i>
                    Saquinga Esencia Natural
                </h5>

                <p>
                    Inspirados en la belleza de la naturaleza,
                    ofrecemos productos para tu cuidado y bienestar,
                    trabajando con dedicación, profesionalismo
                    y humildad.
                </p>

                <p class="mb-0">
                    © 2026 Saquinga Esencia Natural.
                    Todos los derechos reservados.
                </p>

            </div>

        </div>
    `;
}


/* ================================
   CREAR TARJETA DE PRODUCTO
================================ */

function crearTarjetaProducto(producto) {

    return `
        <div class="col-sm-6 col-lg-3">

            <div class="card h-100">

                <img 
                    src="${producto.imagen}"
                    class="card-img-top"
                    alt="${producto.nombre}"
                    onerror="
                        this.src='https://placehold.co/600x400/e4f7ec/1f6f50?text=Esencia+Natural'
                    "
                >

                <div class="card-body d-flex flex-column">

                    <small>
                        <i class="bi bi-tag-fill"></i>
                        ${producto.categoria}
                    </small>

                    <h5 class="card-title">
                        ${producto.nombre}
                    </h5>

                    <p class="price">
                        ${formatoPrecio(producto.precio)}
                    </p>

                    <p class="card-text">
                        ${producto.descripcion}
                    </p>

                    <div class="mt-auto">

                        <a 
                            href="detalle.html?id=${producto.id}"
                            class="btn btn-outline-success btn-sm">

                            <i class="bi bi-eye-fill"></i>
                            Ver detalle

                        </a>

                        <button 
                            type="button"
                            onclick="agregarAlCarrito(${producto.id})"
                            class="btn btn-natural btn-sm">

                            <i class="bi bi-cart-plus-fill"></i>
                            Agregar

                        </button>

                    </div>

                </div>

            </div>

        </div>
    `;
}


/* ================================
   MOSTRAR PRODUCTOS
================================ */

function mostrarProductos(listaProductos, idContenedor) {

    const contenedor = document.getElementById(idContenedor);

    if (!contenedor) {
        return;
    }

    if (!listaProductos || listaProductos.length === 0) {

        contenedor.innerHTML = `
            <div class="col-12">

                <div class="alert alert-warning">
                    No se encontraron productos.
                </div>

            </div>
        `;

        return;
    }

    contenedor.innerHTML = listaProductos
        .map(producto => crearTarjetaProducto(producto))
        .join("");
}


/* ================================
   AGREGAR PRODUCTO AL CARRITO
================================ */

function agregarAlCarrito(idProducto) {

    if (
        typeof productos === "undefined" ||
        !Array.isArray(productos)
    ) {
        alert("No se pudieron cargar los productos.");
        return;
    }

    const producto = productos.find(
        producto => producto.id === idProducto
    );

    if (!producto) {
        alert("Producto no encontrado.");
        return;
    }

    const productoExistente = carrito.find(
        producto => producto.id === idProducto
    );

    if (productoExistente) {

        productoExistente.cantidad++;

    } else {

        carrito.push({
            ...producto,
            cantidad: 1
        });

    }

    guardarCarrito();
    actualizarContador();

    alert("Producto agregado al carrito.");
}


/* ================================
   GUARDAR CARRITO
================================ */

function guardarCarrito() {

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );
}


/* ================================
   ACTUALIZAR CONTADOR
================================ */

function actualizarContador() {

    const contador = document.getElementById(
        "contador-carrito"
    );

    if (!contador) {
        return;
    }

    const cantidadTotal = carrito.reduce(
        (total, producto) => {

            return total +
                Number(producto.cantidad || 0);

        },
        0
    );

    contador.textContent = cantidadTotal;
}


/* ================================
   EJECUTAR FUNCIONES GENERALES
================================ */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        crearHeader();

        crearFooter();

        actualizarContador();

    }
);