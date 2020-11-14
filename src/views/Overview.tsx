import React from "react";
import Layout from "../components/Layout";
import {Link} from "react-router-dom";

const Overview = () =>{
    const id = "lavaboy1738";
    return (
      <Layout>
        <div>$90
          <Link to={"/overview/" + id}></Link>
        </div>
      </Layout>
    )
  }

export default Overview