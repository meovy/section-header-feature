import { Button } from "reactstrap";

export default function Action() {
  return (
    <div className="buttons">
      <Button
        className="btn-neutral mr-1"
        href="#readmore"
        color="info"
        size="lg">
        <i className="now-ui-icons files_single-copy-04"></i> Read More..
      </Button>
      <Button
        href="#subscribe"
        color="info"
        size="lg">
        <i className="now-ui-icons arrows-1_share-66"></i> Subscribe
      </Button>
    </div>
  );
}
