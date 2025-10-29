// import React from "react";
// import styles from "./Search.module.css";
// // import { ReactComponent as SearchIcon } from "../assets/Search_Icon.svg";
// import SearchIcon from "@mui/icons-material/Search";
// import { styled } from "@mui/system";
// import { truncate } from "../helpers/helpers.js";
// import { useNavigate } from "react-router-dom";
// import Autocomplete from "@mui/material/Autocomplete";
// import TextField from "@mui/material/TextField";

// const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
//   "& .MuiInputBase-root": {
//     color: "white",
//     backgroundColor: "var(--color-black)",
//     border: "1px solid var(--color-primary)",
//     borderRadius: "10px",
//     paddingRight: "40px",
//   },
//   "& .MuiOutlinedInput-notchedOutline": {
//     border: "none",
//   },
//   "& .MuiInputBase-input": {
//     padding: "10px 14px",
//   },
//   "& .MuiAutocomplete-listbox": {
//     backgroundColor: "var(--color-black)",
//     color: "white",
//     maxHeight: "500px",
//     overflowY: "auto",
//     border: "1px solid var(--color-primary)",
//     borderRadius: "0px 0px 10px 10px",
//   },
//   "& .Mui-focused": {
//     backgroundColor: "#4a8df6",
//     color: "white",
//   },
//   "& li:active": {
//     backgroundColor: "#2977f5",
//     color: "white",
//   },
// }));

// function Search({ searchData, placeholder }) {
//   const navigate = useNavigate();

//   const handleSubmit = (event, value) => {
//     event.preventDefault();
//     if (value) {
//       navigate(`/album/${value.slug}`);
//     }
//   };

//   return (
//     <div style={{ position: "relative" }}>
//       <form
//         className={styles.wrapper}
//         onSubmit={(e) => {
//           e.preventDefault(); // prevent default form submission
//         }}
//       >
//         <StyledAutocomplete
//           options={Array.isArray(searchData) ? searchData : []}
//           getOptionLabel={(option) => option.title}
//           onChange={(event, value) => handleSubmit(event, value)}
//           renderInput={(params) => (
//             <TextField
//               {...params}
//               placeholder={placeholder}
//               className={styles.search}
//               InputProps={{
//                 ...params.InputProps,
//                 // endAdornment: (
//                 //   <button className={styles.searchButton} type="submit">
//                 //     <SearchIcon />
//                 //   </button>
//                 // ),
//               }}
//             />
//           )}
//           renderOption={(props, option) => {
//             const artists = option.songs.reduce((acc, song) => {
//               acc.push(...song.artists);
//               return acc;
//             }, []);
//             return (
//               <li {...props} className={styles.listElement}>
//                 <div>
//                   <p className={styles.albumTitle}>{option.title}</p>
//                   <p className={styles.albumArtists}>
//                     {truncate(artists.join(", "), 40)}
//                   </p>
//                 </div>
//               </li>
//             );
//           }}
//         />
//         <button className={styles.searchButton} type="submit">
//           <SearchIcon />
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Search;

// import React from "react";
// import styles from "./Search.module.css";
// // import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
// import SearchIcon from "@mui/icons-material/Search";
// import useAutocomplete from "@mui/material/useAutocomplete";
// import { styled } from "@mui/system";
// import { truncate } from "../helpers/helpers";
// import { useNavigate } from "react-router-dom";
// import { Tooltip } from "@mui/material";

// const Listbox = styled("ul")(({ theme }) => ({
//   width: "100%",
//   margin: 0,
//   padding: 0,
//   position: "absolute",
//   borderRadius: "0px 0px 10px 10px",
//   border: "1px solid var(--color-primary)",
//   top: 60,
//   height: "max-content",
//   maxHeight: "500px",
//   zIndex: 10,
//   overflowY: "scroll",
//   left: 0,
//   bottom: 0,
//   right: 0,
//   listStyle: "none",
//   backgroundColor: "var(--color-black)",
//   overflow: "auto",
//   "& li.Mui-focused": {
//     backgroundColor: "#4a8df6",
//     color: "white",
//     cursor: "pointer",
//   },
//   "& li:active": {
//     backgroundColor: "#2977f5",
//     color: "white",
//   },
// }));

// function Search({ searchData, placeholder }) {
//   const {
//     getRootProps,
//     getInputLabelProps,
//     value,
//     getInputProps,
//     getListboxProps,
//     getOptionProps,
//     groupedOptions,
//   } = useAutocomplete({
//     id: "use-autocomplete-demo",
//     options: searchData || [],
//     getOptionLabel: (option) => option.title,
//   });

//   const navigate = useNavigate();
//   const onSubmit = (e, value) => {
//     e.preventDefault();
//     console.log(value);
//     navigate(`/album/${value.slug}`);
//     //Process form data, call API, set state etc.
//   };

//   return (
//     <div style={{ position: "relative" }}>
//       <form
//         className={styles.wrapper}
//         onSubmit={(e) => {
//           onSubmit(e, value);
//         }}
//       >
//         <div {...getRootProps()}>
//           <input
//             name="album"
//             className={styles.search}
//             placeholder={placeholder}
//             required
//             {...getInputProps()}
//           />
//         </div>
//         <div>
//           <button className={styles.searchButton} type="submit">
//             <SearchIcon
//               color="action"
//               sx={{
//                 fill: "black",
//                 fontSize: 30,
//               }}
//             />
//           </button>
//         </div>
//       </form>
//       {groupedOptions.length > 0 ? (
//         <Listbox {...getListboxProps()}>
//           {groupedOptions.map((option, index) => {
//             // console.log(option);
//             const artists = option.songs.reduce((accumulator, currentValue) => {
//               accumulator.push(...currentValue.artists);
//               return accumulator;
//             }, []);

//             return (
//               <li
//                 className={styles.listElement}
//                 {...getOptionProps({ option, index })}
//               >
//                 <div>
//                   <p className={styles.albumTitle}>{option.title}</p>

//                   <p className={styles.albumArtists}>
//                     {truncate(artists.join(", "), 40)}
//                   </p>
//                 </div>
//               </li>
//             );
//           })}
//         </Listbox>
//       ) : null}
//     </div>
//   );
// }

// export default Search;

import React from "react";
import styles from "./Search.module.css";
// import { ReactComponent as SearchIcon } from "../assets/search-icon.svg?react";
// import { ReactComponent as SearchIcon } from "../assets/Search_Icon";
// import useAutocomplete from "@mui/base/useAutocomplete";
import useAutocomplete from "@mui/material/useAutocomplete";
import { styled } from "@mui/system";
import { truncate } from "../helpers/helpers";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Listbox = styled("ul")(({ theme }) => ({
  width: "100%",
  margin: 0,
  padding: 0,
  position: "absolute",
  borderRadius: "0px 0px 10px 10px",
  border: "1px solid var(--color-primary)",
  top: 60,
  height: "max-content",
  maxHeight: "500px",
  zIndex: 10,
  overflowY: "scroll",
  left: 0,
  bottom: 0,
  right: 0,
  listStyle: "none",
  backgroundColor: "var(--color-black)",
  overflow: "auto",
  "& li.Mui-focused": {
    backgroundColor: "#4a8df6",
    color: "white",
    cursor: "pointer",
  },
  "& li:active": {
    backgroundColor: "#2977f5",
    color: "white",
  },
}));

function Search({ searchData, placeholder }) {
  const {
    getRootProps,
    getInputLabelProps,
    value,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: "use-autocomplete-demo",
    options: searchData || [],
    getOptionLabel: (option) => option.title,
  });

  const navigate = useNavigate();
  // const onSubmit = (e, value) => {
  //   e.preventDefault();
  //   console.log(value);
  //   navigate(`/album/${value.slug}`);
  //   //Process form data, call API, set state etc.
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!value || !value.slug) return; // prevent navigation if value is invalid
    navigate(`/album/${value.slug}`);
  };
  return (
    <div style={{ position: "relative" }}>
      <form
        className={styles.wrapper}
        onSubmit={(e) => {
          onSubmit(e, value);
        }}
      >
        <div {...getRootProps()}>
          <input
            name="album"
            className={styles.search}
            placeholder={placeholder}
            required
            {...getInputProps()}
          />
        </div>
        <div>
          <button
            className={styles.searchButton}
            // type="submit"
          >
            <SearchIcon
              color="action"
              sx={{
                fill: "black",
                fontSize: 30,
              }}
            />
          </button>
        </div>
      </form>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => {
            // console.log(option);
            const artists = option.songs.reduce((accumulator, currentValue) => {
              accumulator.push(...currentValue.artists);
              return accumulator;
            }, []);

            return (
              <li
                className={styles.listElement}
                {...getOptionProps({ option, index })}
              >
                <div>
                  <p className={styles.albumTitle}>{option.title}</p>

                  <p className={styles.albumArtists}>
                    {truncate(artists.join(", "), 40)}
                  </p>
                </div>
              </li>
            );
          })}
        </Listbox>
      ) : null}
    </div>
  );
}

export default Search;
