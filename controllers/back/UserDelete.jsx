import { User } from '../../models';

export default async function UserDelete(req, res) {
  try {
    const user = await User.findByIdAndDelete(req.query.id);

    if (user) {
      res.status(200).send({
        status: true,
        message: 'Përdoruesi u fshi me sukses dhe të gjitha produktet e tij.',
        data: null,
        code: 200,
      });
    } else {
      res.status(404).send({
        status: false,
        message: 'Përdoruesi nuk u gjet gjatë përpjekjes për tu fshirë, dhe as ndonjë prej produkteve të tij.',
        data: null,
        code: 404,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: false,
      message: 'Gabim i brendshëm i serverit gjatë përpjekjes për të fshirë përdoruesin dhe produktet e tij.',
      sysErrors: error,
      data: null,
      code: 500,
    });
  }
}
