import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/system/Box";
function MyGrid(props) {
  const { datasource, Cols ,handleEdit ,handleDelete} = props;

  // console.log(datasource, Cols);
// const handleDelete= (e)=>{
// console.log(e.dataId)
// }
  return (
    <>
      {Cols && Array.isArray(Cols) && (
        <table style={{ width: "auto" }}>
          <thead>
            <tr>
              <th>S#</th>
              {Cols.map((y, i) => (
                <th key={i}>{y.displayName}</th>
              ))}
              <th></th>
            </tr>
          </thead>
          <tbody className="table-body">
            {datasource &&
            Array.isArray(datasource) &&
            datasource.length > 0 ? (
              datasource.map((x, i) => (
                <tr key={i} className="table-body-tr">
                  <td>{i + 1}</td>

                  {Cols.map((y, ind) => (
                    <td key={ind}>{x[y.key]}</td>
                  ))}

                  <td>
                    <IconButton>
                      <EditOutlinedIcon onClick={(e)=>{handleEdit(x)}}/>
                    </IconButton>
                  
                    <IconButton>
                      <DeleteForeverOutlinedIcon  onClick={
                        (e)=>{handleDelete(x)}}/>
                    </IconButton>
                  </td>
                </tr>
              ))
            ) : (
              <h1>No Data Found</h1>
            )}
          </tbody>
        </table>
      )}
    </>
  );
}
export default MyGrid;
