import Doctor from "../models/Doctor.js";

const cdoctores = async (req, res) => {
  try {
      
       const doctorExistente = await Doctor.findOne({ email: req.body.email });

       if (doctorExistente) {
         return res.status(400).json({ mensaje: "El doctor ya está registrado" });
       }
   
       
       const doctor = new Doctor(req.body);
       const doctorGuardado = await doctor.save();
   
       res.json({ mensaje: "Registrando un nuevo doctor", doctor: doctorGuardado });
     } catch (error) {
       console.error(error);
       res.status(500).json({ mensaje: "Hubo un error" });
     }
};


const perfil = async (req, res) => {
  res.json({ url: "/api/doctores/perfil" });
};
export { cdoctores, perfil};
