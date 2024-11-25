
export const  getData = async (args) =>{
    const {url, headers} = args;
    // const url = "https://fsa-jwt-practice.herokuapp.com/authenticate";
    //   const headers = {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${token}`,
    //   };
      const params = { method: "GET", headers: headers };
      try {
          const response = await fetch(url, params);
          const result = await response.json();
      } catch (error) {
          console.log("result", result);
      }

}