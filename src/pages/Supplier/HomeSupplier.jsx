import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostByUser } from "../../context/thunks/postThunks";

const HomeSupplier = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  useEffect(() => {
    dispatch(getPostByUser(user.token, user.id))
  }, [])

  return (
    <main>
      <h1>Tus publicaciones</h1>
      <div>
        <button>Crear publicación</button>
      </div>
    </main>
  );
};

export default HomeSupplier;
