import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import API from "../../lib/api";

type FormValues = {
  surname: string;
  firstName: string;
  dateOfBirth: string;
  phone: string;
  clan: string;
  village: string;
  ward: string;
  files: FileList;
};

const Application = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      const formData = new FormData();

      // ✅ append text fields explicitly (TYPE SAFE)
      formData.append("surname", data.surname);
      formData.append("firstName", data.firstName);
      formData.append("dateOfBirth", data.dateOfBirth);
      formData.append("phone", data.phone);
      formData.append("clan", data.clan);
      formData.append("village", data.village);
      formData.append("ward", data.ward);

      // ✅ append files safely
      Array.from(data.files).forEach((file) => {
        formData.append("files", file);
      });

      await API.post("/applications", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Application submitted successfully");
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Submission failed");
    }
  };

  return (
    <div className="pt-24 max-w-3xl mx-auto px-4">
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("surname")} placeholder="Surname" />
        <input {...register("firstName")} placeholder="First Name" />
        <input type="date" {...register("dateOfBirth")} />
        <input {...register("phone")} />
        <input {...register("clan")} />
        <input {...register("village")} />
        <input {...register("ward")} />
        <input type="file" {...register("files")} multiple />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Application;
