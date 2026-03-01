import { ProjectModel, IProject } from './project.js';

export const ProjectService = {
  
  // 1. crea y guarda un nuevo documento
  async create(data: IProject) {
    const project = new ProjectModel(data);
    return await project.save(); // .save() envía el objeto a la base de datos
  },

  // 2. GET BY ID: Retorna con populate
  async getById(id: string) {
    return await ProjectModel.findById(id) // Busca por el campo _id
      .populate('organization') 
      .lean(); // Convierte el resultado en un objeto JS plano (pesa menos)
  },

  // 3. UPDATE: Modifica datos existentes
  async update(id: string, data: Partial<IProject>) {
    // findByIdAndUpdate busca y actualiza en un solo paso
    // { new: true } es para que nos devuelva el proyecto ya modificado, no el antiguo
    return await ProjectModel.findByIdAndUpdate(id, data, { new: true }).lean();
  },

  // 4. DELETE: Elimina un documento
  async delete(id: string) {
    return await ProjectModel.findByIdAndDelete(id).lean();
  },

  // 5. LIST ALL: Devuelve todos los proyectos
  async listAll() {
    return await ProjectModel.find().lean(); // .find() sin filtros devuelve todo
  }
};