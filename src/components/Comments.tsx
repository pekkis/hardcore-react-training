import {
  Quarticle,
  getComments,
  postComment,
  removeComment
} from "@/services/quarticle";
import { FC, useEffect, useState } from "react";

type Props = {
  quarticle: Quarticle;
};

const Comments: FC<Props> = ({ quarticle }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getComments(quarticle.id).then(setComments);
  }, []);

  return (
    <section>
      <button
        onClick={() => {
          postComment(quarticle.id).then((cccc) => {
            console.log(cccc, "cccc");
          });
        }}
      >
        post a comment
      </button>

      <h3>COMMENTS!</h3>
      <div>
        {comments.map((comment) => {
          return (
            <div key={comment.id}>
              {JSON.stringify(comment)}
              <button
                onClick={() => {
                  removeComment(quarticle.id, comment.id);
                }}
              >
                rmeovado
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Comments;
