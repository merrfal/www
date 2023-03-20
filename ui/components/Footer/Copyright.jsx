export default function Copyright() {
  const currentYear = new Date().getFullYear();

  return (
    <p className="text-sm text-gray-500 pt-5">
      &copy; {currentYear} Merrfal mundësuar nga organizata{" "}
      <a href="https://jap.org" target="_blank">
        Jap
      </a>
      .
    </p>
  );
}
