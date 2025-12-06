import { Bold, Eraser, Italic, Underline } from "lucide-react";
import styles from "./EmailEditor.module.scss";

export function EmailEditor() {
  return (
    <div>
      <h1>Email editor</h1>
      <div className={styles.card}>
        <textarea className={styles.editor} spellCheck="false">
          Hey! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
          cupiditate iste mollitia consequuntur voluptatem vel magni eaque velit
          temporibus at quos, fugiat libero reiciendis facere nesciunt? Dicta
          quaerat molestiae ullam?
        </textarea>
        <div className={styles.actions}>
          <div className={styles.tools}>
            <button>
              <Eraser size={17} />
            </button>
            <button>
              <Bold size={17} />
            </button>
            <button>
              <Italic size={17} />
            </button>
            <button>
              <Underline size={17} />
            </button>
          </div>
          <button>Send now</button>
        </div>
      </div>
    </div>
  );
}

export default EmailEditor;
