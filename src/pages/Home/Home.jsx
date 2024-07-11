import useForm from "../../hooks/useForm";
import InputField from "../../components/InputField";
import ToastContainer from "../../components/Toast/ToastContainer";
import resolver from "./resolver";
import { useToast } from "../../hooks/useToast";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const { addToast } = useToast();

  const handler = (formValues) => {
    addToast({
      ...formValues,
      id: uuidv4(),
    });
  };

  const { handleSubmit } = useForm({ handler, resolver });

  return (
    <>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1 className={styles.title}>토스트 컨트롤러</h1>
          <div className={styles.inputFields}>
            <InputField
              label="제목 (필수)"
              name="title"
              defaultValue="Scheduled: Catch up"
              autoFocus
            />
            <InputField
              label="내용 (필수)"
              name="content"
              defaultValue="Friday, February 10, 2023 at 5:57 PM"
            />
            <InputField
              label="노출 시간(ms) (선택)"
              name="duration"
              defaultValue="2000"
              type="number"
            />
          </div>
          <button className={styles.button}>토스트 띄우기</button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

const styles = {
  container: [
    "flex",
    "flex-col",
    "items-center",
    "justify-center",
    "h-screen",
    "w-screen",
  ].join(" "),
  form: ["w-80", "flex", "flex-col", "gap-6"].join(" "),
  title: ["text-2xl", "font-semibold", "text-center"].join(" "),
  button: [
    "bg-black",
    "text-white",
    "py-3",
    "font-medium",
    "rounded-md",
    "text-[15px]",
    "hover:bg-black/80",
    "transition",
  ].join(" "),
  inputFields: ["flex", "flex-col", "gap-4"].join(" "),
};

export default Home;
