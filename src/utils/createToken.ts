import jwt from 'jsonwebtoken'


export const createToken = (id: string) => {
    return jwt.sign({
        id
      }, process.env.JWT_TOKEN as string, { expiresIn: '1h' });
}

