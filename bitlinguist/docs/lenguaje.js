module.exports = {
    paths: {
        "/lenguaje/get": {
            "get": {
                "tags": ["Lenguaje CRUD operations"],
                "description": "OObtiene todos los lenguajes de la base de datos",
                "parameters": [],
                "responses": {
                    "200": {
                        "description": "OK"
                    }
                }
            }
        },
        "/lenguaje/get/{id}": {
            "get": {
                "tags": ["Lenguaje CRUD operations"],
                "description": "Obtiene un lenguaje de la base de datos por medio de un id",
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "type": "string"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK"
                    },
                    "404": {
                        "description": "Not Found"
                    }
                }
            }
        },
        "/lenguaje/create": {
            "post": {
                "tags": ["Lenguaje CRUD operations"],
                "description": "Crea un lenguaje",
                "parameters": [
                    {
                        "name": "obj",
                        "in": "body",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "Nombre": {
                                    "example": "Italiano"
                                },
                                "Hablantes": {
                                    "example": 68000000
                                },
                                "Origen": {
                                    "example": "Latín Vulgar"
                                },
                                "Familia": {
                                    "example": ["Italic", "Romance Western", "Romance"]
                                },
                                "Paises": {
                                    "example": ["Angola", "Brazil", "Mozambique"]
                                },
                                "Imagen": {
                                    "example": "https://cdn.countryflags.com/thumbs/italy/flag-button-round-250.png"
                                }
                            }
                        }
                    }
                ],
                "responses": {
                    "201": {
                        "description": "Created"
                    }
                }
            }
        },
        "/lenguaje/edit/{id}": {
            "put": {
                "tags": ["Lenguaje CRUD operations"],
                "description": "",
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "type": "string"
                    },
                    {
                        "name": "obj",
                        "in": "body",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "Nombre": {
                                    "example": "Italiano"
                                },
                                "Hablantes": {
                                    "example": 68000000
                                },
                                "Origen": {
                                    "example": "Latín Vulgar"
                                },
                                "Familia": {
                                    "example": ["Italic", "Romance Western", "Romance"]
                                },
                                "Paises": {
                                    "example": ["Angola", "Brazil", "Mozambique"]
                                },
                                "Imagen": {
                                    "example": "https://cdn.countryflags.com/thumbs/italy/flag-button-round-250.png"
                                }
                            }
                        }
                    }
                ],
                "responses": {
                    "204": {
                        "description": "No Content"
                    },
                    "404": {
                        "description": "Not Found"
                    }
                }
            }
        },
        "/lenguaje/delete/{id}": {
            "delete": {
                "tags": ["Lenguaje CRUD operations"],
                "description": "",
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "type": "string"
                    }
                ],
                "responses": {
                    "204": {
                        "description": "No Content"
                    },
                    "404": {
                        "description": "Not Found"
                    }
                }
            }
        },
        "/user/login": {
            "post": {
                "tags": ["Users CRUD operations"],
                "description": "",
                "parameters": [
                    {
                        "name": "obj",
                        "in": "body",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "Email": {
                                    "example": "lkdubon@correo.url.edu.gt"
                                },
                                "Password": {
                                    "example": "3r1z0s311"
                                }
                            }
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK"
                    },
                    "401": {
                        "description": "Unauthorized"
                    },
                    "404": {
                        "description": "Not Found"
                    }
                }
            }
        },
        "/user/create": {
            "post": {
                "tags": ["Users CRUD operations"],
                "description": "",
                "parameters": [
                    {
                        "name": "obj",
                        "in": "body",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "Email": {
                                    "example": "lkdcc.8@gmail.com"
                                },
                                "Password": {
                                    "example": "PW2021"
                                },
                                "Nombre": {
                                    "example": "Lesly Dubón"
                                }
                            }
                        }
                    }
                ],
                "responses": {
                    "201": {
                        "description": "Created"
                    },
                    "400": {
                        "description": "Bad Request"
                    }
                }
            }
        },
        "/user/editPassword": {
            "put": {
                "tags": ["Users CRUD operations"],
                "description": "",
                "parameters": [
                    {
                        "name": "obj",
                        "in": "body",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "Email": {
                                    "example": "lkdubon@correo.url.edu.gt"
                                },
                                "Password": {
                                    "example": "PW2021"
                                }
                            }
                        }
                    }
                ],
                "responses": {
                    "204": {
                        "description": "No Content"
                    },
                    "404": {
                        "description": "Not Found"
                    }
                }
            }
        }
    },
};