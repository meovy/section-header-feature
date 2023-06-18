import { Col } from "reactstrap";

export default function InfoItem({
  id,
  icon,
  iconColor,
  iconCircle,
  title,
  description,
  col,
}) {
  return (
    <Col md={col}>
      <div className={`info info-hover info-${id}`}>
        <div className={`icon ${iconColor} ${iconCircle ? "icon-circle" : ""}`}>
          <i className={`now-ui-icons ${icon}`} />
        </div>
        <h4 className={`info-title-${id}`}>{title}</h4>
        <p className={`description-${id}`}>{description}</p>
      </div>
    </Col>
  );
}
