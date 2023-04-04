import { MenuItem, Select, TextField } from "@mui/material";
import React, { Dispatch } from "react";
import { SearchState } from "../../interface/searchState";
import "./SearchUsers.scss";

interface searchUsersProps {
  search: SearchState;
  setSearch: Dispatch<React.SetStateAction<SearchState>>;
}

function SearchUsers({ search, setSearch }: searchUsersProps) {
  return (
    <div className="Search_users">
      <TextField
        className="Search_users_textfield"
        id="search"
        label="Search user"
        type="text"
        variant="outlined"
        onChange={(event) =>
          setSearch((prev) => ({ ...prev, search: event.target.value }))
        }
        value={search.search}
      />
      <Select
        variant="standard"
        className="Search_users_select"
        value={search.filter}
        onChange={(event) =>
          setSearch((prev) => ({
            ...prev,
            filter: event.target.value as SearchState["filter"],
          }))
        }
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="email">Email</MenuItem>
        <MenuItem value="name">Name</MenuItem>
        <MenuItem value="location">Location</MenuItem>
      </Select>
    </div>
  );
}

export default SearchUsers;
