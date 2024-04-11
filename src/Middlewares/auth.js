import jwt from "jsonwebtoken";

export default function auth(req, res, next) {
  try{
    // recuperer le header authorization
    const array = req.headers.authorization.split(' ');
    if (array.length !== 2) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const token = array[1];
    // si le token n'est pas existant, on renvoie une erreur 401
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    let decodedToken = jwt.verify(token, process.env.JWT_SECRET);;
    // faire des try catch pour gerer les erreurs
    // verifier si le token est null

    // vous allez ensuite modifier request pour qu'il contiennent des infos relatives
    // au user authentifié
    req.userData = decodedToken;
    next();
  } catch (error) {
      res.status(401).json({ error: 'Unauthorized' });
  }
}