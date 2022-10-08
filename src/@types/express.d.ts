import User from '../Models/User'

declare global {
	namespace Express {
		export interface Request {
			user: User 
		}
	}
}