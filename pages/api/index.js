import dbConnect from '../../utils/dbConnect';
import Posts from '../../models/posts';

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const Postss = await Posts.find({});

                res.status(200).json({ success: true, data: Postss })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                const Posts = await Posts.create(req.body);

                res.status(201).json({ success: true, data: Posts })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}