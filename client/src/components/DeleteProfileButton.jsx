import {useNavigate} from 'react-router-dom';
import {FaTrash} from 'react-icons/fa';
import {GET_PROFILES} from '../queries/profileQueries';
import { DELETE_PROFILE } from '../mutations/profileMutations';
import {useMutation} from '@apollo/client';

export default function DeleteProfileButton({ profileId}) {
  const navigate = useNavigate();

  const [deleteProfile] = useMutation(DELETE_PROFILE, { 
    variables: { id: profileId },
    onCompleted: () => navigate('/'),
    refetchQueries: [{ query: GET_PROFILES }]
  });

  return (
    <div className='d-flex mt-5 ms-auto'>
      <button className="btn btn-danger m-2" onClick={deleteProfile}>
        <FaTrash className='icon' />
        Delete Profile
      </button>
    </div>
  )
}