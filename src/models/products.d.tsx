import { type ArticuloEx } from './articulo.d'
import { type Color } from './color.d'
import { type Sucursal } from './sucursal.d'
import { type Talle } from './talle.d'

export interface Producto {
  IdInventario: number
  Cantidad: number
  Sucursal: Sucursal
  Color: Color
  Talle: Talle
  Articulo: ArticuloEx
}

export const ProductsEx: Producto[] = [
  {
    IdInventario: 1,
    Cantidad: 5,
    Sucursal: {
      IdSucursal: 1,
      Nombre: 'Centro',
      Telefono: null,
      Email: 'centro@gmail.com',
      Domicilio: 'Maipu 123',
      Ciudad: 'San Miguel de Tucumán'
    },
    Color: {
      IdColor: 1,
      Nombre: 'Rojo'
    },
    Talle: {
      IdTalle: 1,
      Medida: 'S',
      IdTipoTalle: 1
    },
    Articulo: {
      IdArticulo: 1,
      Codigo: 1001,
      Descripcion: 'Remera',
      Costo: 15000.78,
      PorcentajeIVA: 0.21,
      MargenGanancia: 0.15,
      Categoria: {
        IdCategoria: 1,
        Descripcion: 'Remera'
      },
      Marca: {
        IdMarca: 1,
        Descripcion: 'Adidas'
      },
      TipoTalle: {
        IdTipoTalle: 1,
        Descripcion: 'Americano'
      }
    }
  },
  {
    IdInventario: 2,
    Cantidad: 5,
    Sucursal: {
      IdSucursal: 1,
      Nombre: 'Centro',
      Telefono: null,
      Email: 'centro@gmail.com',
      Domicilio: 'Maipu 123',
      Ciudad: 'San Miguel de Tucumán'
    },
    Color: {
      IdColor: 1,
      Nombre: 'Rojo'
    },
    Talle: {
      IdTalle: 1,
      Medida: 'M',
      IdTipoTalle: 1
    },
    Articulo: {
      IdArticulo: 1,
      Codigo: 1001,
      Descripcion: 'Remera',
      Costo: 15000.78,
      PorcentajeIVA: 0.21,
      MargenGanancia: 0.15,
      Categoria: {
        IdCategoria: 1,
        Descripcion: 'Remera'
      },
      Marca: {
        IdMarca: 1,
        Descripcion: 'Adidas'
      },
      TipoTalle: {
        IdTipoTalle: 1,
        Descripcion: 'Americano'
      }
    }
  },
  {
    IdInventario: 3,
    Cantidad: 2,
    Sucursal: {
      IdSucursal: 1,
      Nombre: 'Centro',
      Telefono: null,
      Email: 'centro@gmail.com',
      Domicilio: 'Maipu 123',
      Ciudad: 'San Miguel de Tucumán'
    },
    Color: {
      IdColor: 1,
      Nombre: 'Rojo'
    },
    Talle: {
      IdTalle: 1,
      Medida: 'XS',
      IdTipoTalle: 1
    },
    Articulo: {
      IdArticulo: 1,
      Codigo: 1001,
      Descripcion: 'Remera',
      Costo: 15000.78,
      PorcentajeIVA: 0.21,
      MargenGanancia: 0.15,
      Categoria: {
        IdCategoria: 1,
        Descripcion: 'Remera'
      },
      Marca: {
        IdMarca: 1,
        Descripcion: 'Adidas'
      },
      TipoTalle: {
        IdTipoTalle: 1,
        Descripcion: 'Americano'
      }
    }
  },
  {
    IdInventario: 4,
    Cantidad: 10,
    Sucursal: {
      IdSucursal: 1,
      Nombre: 'Centro',
      Telefono: null,
      Email: 'centro@gmail.com',
      Domicilio: 'Maipu 123',
      Ciudad: 'San Miguel de Tucumán'
    },
    Color: {
      IdColor: 1,
      Nombre: 'Rojo'
    },
    Talle: {
      IdTalle: 1,
      Medida: 'L',
      IdTipoTalle: 1
    },
    Articulo: {
      IdArticulo: 1,
      Codigo: 1001,
      Descripcion: 'Remera',
      Costo: 15000.78,
      PorcentajeIVA: 0.21,
      MargenGanancia: 0.15,
      Categoria: {
        IdCategoria: 1,
        Descripcion: 'Remera'
      },
      Marca: {
        IdMarca: 1,
        Descripcion: 'Adidas'
      },
      TipoTalle: {
        IdTipoTalle: 1,
        Descripcion: 'Americano'
      }
    }
  },
  {
    IdInventario: 5,
    Cantidad: 6,
    Sucursal: {
      IdSucursal: 1,
      Nombre: 'Centro',
      Telefono: null,
      Email: 'centro@gmail.com',
      Domicilio: 'Maipu 123',
      Ciudad: 'San Miguel de Tucumán'
    },
    Color: {
      IdColor: 2,
      Nombre: 'Azul'
    },
    Talle: {
      IdTalle: 1,
      Medida: 'S',
      IdTipoTalle: 1
    },
    Articulo: {
      IdArticulo: 1,
      Codigo: 1001,
      Descripcion: 'Remera',
      Costo: 15000.78,
      PorcentajeIVA: 0.21,
      MargenGanancia: 0.15,
      IdCategoria: {
        IdCategoria: 1,
        Descripcion: 'Remera'
      },
      IdMarca: {
        IdMarca: 1,
        Descripcion: 'Adidas'
      },
      IdTipoTalle: {
        IdTipoTalle: 1,
        Descripcion: 'Americano'
      }
    }
  },
  {
    IdInventario: 6,
    Cantidad: 5,
    Sucursal: {
      IdSucursal: 1,
      Nombre: 'Centro',
      Telefono: null,
      Email: 'centro@gmail.com',
      Domicilio: 'Maipu 123',
      Ciudad: 'San Miguel de Tucumán'
    },
    Color: {
      IdColor: 2,
      Nombre: 'Azul'
    },
    Talle: {
      IdTalle: 1,
      Medida: 'M',
      IdTipoTalle: 1
    },
    Articulo: {
      IdArticulo: 1,
      Codigo: 1001,
      Descripcion: 'Remera',
      Costo: 15000.78,
      PorcentajeIVA: 0.21,
      MargenGanancia: 0.15,
      Categoria: {
        IdCategoria: 1,
        Descripcion: 'Remera'
      },
      Marca: {
        IdMarca: 1,
        Descripcion: 'Adidas'
      },
      TipoTalle: {
        IdTipoTalle: 1,
        Descripcion: 'Americano'
      }
    }
  },
  {
    IdInventario: 7,
    Cantidad: 2,
    Sucursal: {
      IdSucursal: 1,
      Nombre: 'Centro',
      Telefono: null,
      Email: 'centro@gmail.com',
      Domicilio: 'Maipu 123',
      Ciudad: 'San Miguel de Tucumán'
    },
    Color: {
      IdColor: 2,
      Nombre: 'Azul'
    },
    Talle: {
      IdTalle: 1,
      Medida: 'XS',
      IdTipoTalle: 1
    },
    Articulo: {
      IdArticulo: 1,
      Codigo: 1001,
      Descripcion: 'Remera',
      Costo: 15000.78,
      PorcentajeIVA: 0.21,
      MargenGanancia: 0.15,
      Categoria: {
        IdCategoria: 1,
        Descripcion: 'Remera'
      },
      Marca: {
        IdMarca: 1,
        Descripcion: 'Adidas'
      },
      TipoTalle: {
        IdTipoTalle: 1,
        Descripcion: 'Americano'
      }
    }
  },
  {
    IdInventario: 8,
    Cantidad: 10,
    Sucursal: {
      IdSucursal: 1,
      Nombre: 'Centro',
      Telefono: null,
      Email: 'centro@gmail.com',
      Domicilio: 'Maipu 123',
      Ciudad: 'San Miguel de Tucumán'
    },
    Color: {
      IdColor: 2,
      Nombre: 'Azul'
    },
    Talle: {
      IdTalle: 1,
      Medida: 'L',
      IdTipoTalle: 1
    },
    Articulo: {
      IdArticulo: 1,
      Codigo: 1001,
      Descripcion: 'Remera',
      Costo: 15000.78,
      PorcentajeIVA: 0.21,
      MargenGanancia: 0.15,
      Categoria: {
        IdCategoria: 1,
        Descripcion: 'Remera'
      },
      Marca: {
        IdMarca: 1,
        Descripcion: 'Adidas'
      },
      TipoTalle: {
        IdTipoTalle: 1,
        Descripcion: 'Americano'
      }
    }
  }
]

export interface ProductoCarrito {
  IdCarrito: number
  Cantidad: number
  Producto: Producto
  Precio: number
}

export const ProductsCarrito = [
  {
    IdCarrito: 1,
    Cantidad: 2,
    Producto: {
      IdInventario: 1,
      Cantidad: 5,
      Sucursal: {
        IdSucursal: 1,
        Nombre: 'Centro',
        Telefono: null,
        Email: 'centro@gmail.com',
        Domicilio: 'Maipu 123',
        Ciudad: 'San Miguel de Tucumán'
      },
      Color: {
        IdColor: 1,
        Nombre: 'Rojo'
      },
      Talle: {
        IdTalle: 1,
        Medida: 'S',
        IdTipoTalle: 1
      },
      Articulo: {
        IdArticulo: 1,
        Codigo: 1001,
        Descripcion: 'Remera',
        Costo: 15000.78,
        PorcentajeIVA: 0.21,
        MargenGanancia: 0.15,
        Categoria: {
          IdCategoria: 1,
          Descripcion: 'Remera'
        },
        Marca: {
          IdMarca: 1,
          Descripcion: 'Adidas'
        },
        TipoTalle: {
          IdTipoTalle: 1,
          Descripcion: 'Americano'
        }
      }
    },
    Precio: 20401.1
  }
]
