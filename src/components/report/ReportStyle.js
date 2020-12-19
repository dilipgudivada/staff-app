export const reportStyle = {
  root: {},
  header: {
    float: "left",
    width: "100%",
    margin: "10px 0 10px",
  },
  iconHeader: {
    width: "100%",
    height: "30px",
  },
  headIcons: {
    float: "right",
    width: "90px",
    display: "flex",
    justifyContent: "space-around",
    marginRight: "20px",
  },
  exportList: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f4f6f8",
    justifyContent: "space-around",
    height: "50px",
    border: "1px solid #d2d1d1",
    borderRadius: "3px",
    width: "130px",
    textAlign: "center",
  },
  exportListItem: {
    backgroundColor: "#ffffff",
    cursor: "pointer",
    color: "black",
    "&:hover": {
      background: "#3f51b5",
      color: "#ffffff",
    },
  },
};
