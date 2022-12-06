import { User } from '../../models';
import { Response } from '../../utils';

export default async function UserDelete(req, res) {
  try {
    const user = await User.findByIdAndDelete(req.query.id);

    if (user) Response(res, 200, true, "Përdoruesi u fshi me sukses dhe të gjitha produktet e tij.", null);
    else Response(res, 404, false, "Përdoruesi nuk u gjet gjatë përpjekjes për tu fshirë, dhe as ndonjë prej produkteve të tij.", null);
  } catch (error) {
    Response(res, 500, false, "Gabim i brendshëm i serverit gjatë përpjekjes për të fshirë përdoruesin dhe produktet e tij.", null);
  }
}
