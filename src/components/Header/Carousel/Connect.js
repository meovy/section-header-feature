import { Button } from "reactstrap";

export default function Connect() {
  const icons = [
    "fa-twitter",
    "fa-facebook-square",
    "fa-google-plus",
    "fa-instagram",
  ];

  return (
    <>
      <h5>Connect with us on:</h5>
      <div className="buttons">
        {icons.map((icon) => (
          <Button
            key={icon}
            className="btn-icon btn-neutral btn-round mt-2 mr-1"
            color="danger"
            href="#twitter">
            <i className={`fab ${icon}`}></i>
          </Button>
        ))}
      </div>
    </>
  );
}
