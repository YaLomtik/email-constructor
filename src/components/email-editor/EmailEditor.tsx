import { Bold, Eraser, Italic, Underline } from "lucide-react";
import styles from "./EmailEditor.module.scss";

import parse from "html-react-parser";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { emailService } from "../../services/email.service.ts";
import { UseEditor } from "./useEditor.ts";

export function EmailEditor() {
  const { applyFormat, text, updateSelection, setText, textRef } = UseEditor();

  const QueryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["create email"],
    mutationFn: () => emailService.sendEmails(text),
    onSuccess() {
      setText("");
      QueryClient.refetchQueries({ queryKey: ["email list"] });
    },
  });

  return (
    <div>
      <h1>Email editor</h1>
      {text && <div className={styles.preview}>{parse(text)}</div>}

      <div className={styles.card}>
        <textarea
          ref={textRef}
          className={styles.editor}
          spellCheck="false"
          onSelect={updateSelection}
          value={text}
          onChange={(e) => setText(e.target.value)}
        >
          {text}
        </textarea>
        <div className={styles.actions}>
          <div className={styles.tools}>
            <button onClick={() => setText("")}>
              <Eraser size={17} />
            </button>
            <button onClick={() => applyFormat("bold")}>
              <Bold size={17} />
            </button>
            <button onClick={() => applyFormat("italic")}>
              <Italic size={17} />
            </button>
            <button onClick={() => applyFormat("underline")}>
              <Underline size={17} />
            </button>
          </div>
          <button disabled={isPending} onClick={() => mutate()}>
            Send now
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmailEditor;
