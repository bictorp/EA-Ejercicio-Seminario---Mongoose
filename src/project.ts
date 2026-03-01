import { Schema, model, Types } from 'mongoose';

// 1. La Interface
export interface IProject {
  _id?: string;
  title: string;
  description: string;
  organization: Types.ObjectId; // El "vínculo" o clave ajena
}

// 2. El Schema
const projectSchema = new Schema<IProject>({
  title: { type: String, required: true },
  description: { type: String },
  // este ID apunta a la colección 'Organization'
  organization: { type: Schema.Types.ObjectId, ref: 'Organization', required: true }
});

export const ProjectModel = model<IProject>('Project', projectSchema);