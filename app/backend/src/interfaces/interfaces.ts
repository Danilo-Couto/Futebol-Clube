import * as jwt from 'jsonwebtoken';

export interface IsJoi {
  [x: string]: any;
  isJoi: boolean; statusCode: number; message: string;
}

export interface JwtConfig {
  expiresIn: jwt.SignOptions['expiresIn'];
  algorithm: jwt.Algorithm;
}

// USER
export interface IUser {
  // dataValues?: any
  id: number;
  username: string;
  role: string;
  email: string;
  password: string;
}

export interface IUserModel {
  getByName(user: IUser): Promise<IUser>
  findAll(): Promise<IUser[]>
  getAll():Promise<IUser[]>
  create(user: IUser): Promise<IUser>
  findOne(user: { where: { email: string; }; }): any;
}

// LOGIN
export interface IloginService {
  login(email: string, password: string): Promise<any>
  validateLogin(req: Request, res: Response): Promise<any>
}

// TEAMS
export interface ITeam {
  id: number;
  teamName:string;
}
export interface ITeamService {
  findAll():Promise<ITeam[]>
  findByPk(id: number):Promise<ITeam>;
}

// MATCHES
export interface IMatch {
  id: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress: boolean;
}

// LEADERBOARD

