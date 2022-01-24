import ProfileDummy from '../../utils/dummy-data/ProfileDummy'


const initialState = {
  profilePicture: ProfileDummy.profilePicture,
  name: ProfileDummy.name,
  email: ProfileDummy.email,
  department: ProfileDummy.department,
  fullAuthorization: ProfileDummy.fullAuthorization 
};

const profileReducer = (state = initialState, action: { type: any; }) => {
 // switch (action.type) {
   // default:
      return state; 
 // }
}

export default profileReducer