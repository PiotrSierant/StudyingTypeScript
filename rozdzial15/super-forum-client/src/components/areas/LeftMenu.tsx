import React, { useEffect, useState } from "react";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
//import { getCategories } from "../../services/DataService";
//import Category from "../../models/Category";
import "./LeftMenu.css";
import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

const GetAllCategories = gql`
  query getAllCategories {
    getAllCategories {
      id
      name
    }
  }
`;

const LeftMenu = () => {
  const { loading, error, data } = useQuery(GetAllCategories);

  const { width } = useWindowDimensions();
  const [categories, setCategories] = useState<JSX.Element>(
    <div>Menu z lewej</div>
  );

  useEffect(() => {
    if (loading) {
      setCategories(<span>Trwa wczytywanie ...</span>);    
    } else if (error) {
      setCategories(<span>Podczas wczytywania kategorii wystąpił błąd...</span>);
    } else {
      if (data && data.getAllCategories) {
        const cats = data.getAllCategories.map((cat: any) => {
          return <li key={cat.id}>
            <Link to={`/categorythreads/${cat.id}`}>{cat.name}</Link>
          </li>;
        });
        
        setCategories(<ul className="category">{cats}</ul>);
      } 
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (width <= 768) {
    return null;
  }
  return <div className="leftmenu">{categories}</div>;
};

export default LeftMenu;
