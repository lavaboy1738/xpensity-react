import React from "react";
import Layout from "../components/Layout";
import {Link} from "react-router-dom";
import { createID } from "utils/createID";

const Overview = () =>{
    const id = createID();
    return (
      <Layout>
        <div>
          <Link to={"/overview/" + id}>try me bitch</Link>
        </div>
      </Layout>
    )
  }

export default Overview