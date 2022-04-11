import {
  NextApiRequest,
  NextApiResponse
} from 'next';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  res.redirect('/404');
}

export default handler;
