import Profile from "../../utils/constants/types/Profile"
import { profileListTypes } from "./profileActions";

export type UpdateProfileAction = {
  type: string;
  profileData: Profile;
}

export type UserListState = Profile[];

export type UserListAction =  UpdateProfileAction 

export const updateProfile = (name: string, email: string, profilePicture: string, department: string, fullAuthorization: boolean): 
UpdateProfileAction => ({
  type: profileListTypes.UpdataProfile,
  profileData: {
      name,
      email,
      profilePicture,
      department,
      fullAuthorization, 
  }
});