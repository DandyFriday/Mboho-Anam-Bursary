const Bursary = () => {
  return (
    <main className="pt-24 max-w-6xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-primary mb-6">
        Mboho Anam Bursary Programme
      </h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Student Eligibility</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Applicant must be an indigene of Anam</li>
          <li>Must be enrolled in a recognized higher institution</li>
          <li>Must possess valid student identification</li>
          <li>Must demonstrate good conduct</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Application Requirements</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Recent school fees receipt</li>
          <li>Signed letter of attestation from Head of Department</li>
          <li>Admission letter</li>
          <li>Valid means of identification</li>
        </ul>
      </section>
    </main>
  );
};

export default Bursary;
