const Joi = require("joi");
const { createService } = require("../services/book/create");
const { findByIdService } = require("../services/book/findById");

// Esquema de validación con Joi
const bookSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().optional(),
  published: Joi.boolean().required(),
  author: Joi.string().required(),
});

exports.create = async (req, res) => {
  try {
    // Validar datos del body
    console.log("Validando datos del body: ", req.body);
    const { error } = bookSchema.validate(req.body);
    if (error) {
      console.error("Error validando datos del body: ", error);
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }
    const book = await createService(req, res)
    // Return de la info en formato JSON
    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: book,
    });
  } catch (error) {
    console.error("Error creando un libro. createController: ", error);
    res.status(error.status || 500).json({
      success: false,
      message: error.message || "Some error occurred while creating the Book.",
    });
  }
};

exports.findById = async (req, res) => {
  try {
    const book = await findByIdService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Book found successfully",
      data: book,
    });
  } catch (error) {
    console.error("Error buscando un libro. findByIdController: ", error);
    res.status(error.status || 500).json({
      success: false,
      message: error.message || "Some error occurred while finding the Book.",
    });
  }
}
