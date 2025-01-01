import Text "mo:base/Text";
import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Result "mo:base/Result";
import Time "mo:base/Time";
import Iter "mo:base/Iter";
import Int "mo:base/Int";
import Buffer "mo:base/Buffer";
actor {

  //define types
  type House={
    owner:Principal;
    id:Text;
    name:Text;
    title:Text;
    description:Text;
    location:Text;

    price:Text;
    email:Text;
  
    image1:Text;

  };
  type User={
    id:Principal;
    houses:[House]
  };

  //define storages

  let houseowners=HashMap.HashMap<Principal,User>(0,Principal.equal,Principal.hash);
  let housestorages=HashMap.HashMap<Text,House>(1,Text.equal,Text.hash);
  public query func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };

  //register user

  public shared ({caller}) func register_user():async Text{

    switch(houseowners.get(caller)){
      case (null){

        let new_user:User={
          id=caller;
          houses=[]
        };
        houseowners.put(caller,new_user);
        return "registered"
      };
      case (?_found){
        return "welcome back"
      };
    }
  };

  //add house

  public shared ({caller}) func register_new_house(
    name:Text,
    title:Text,
    description:Text,
    location:Text,
   
    price:Text,
    email:Text,
 
    image1:Text,
  ):async Text{
     let id:Text=Int.toText(Time.now());
    let new_house:House={
      owner=caller;
      id;
      name;
      title;
      description;
      location;
     
      price;
      email;
      
      image1;
      
    };

    //get user
    switch(houseowners.get(caller)){
      case (null){
        return "failed"
      };
      case (?found){

        //update house owners arrays

        let houseownershouses=Buffer.fromArray<House>(found.houses);
        houseownershouses.add(new_house);

        let updatedhouseowner=Buffer.toArray(houseownershouses);
        let updatedhouses:User={
          id=caller;
          houses=updatedhouseowner;
        };
        houseowners.put(caller,updatedhouses);

       housestorages.put(id,new_house);
        return "registered"
      }
    }
  };

  //house owner delete house
  public shared ({caller}) func delete_house(houseid:Text):async Text{

    //verify that house actually exists

    switch(houseowners.get(caller)){
      case (null){
        return "failed"
      };
      case (?found){
        //now get the house
        switch(housestorages.get(houseid)){

          case (null){
            return "house not found"
          };
          case (?house){
            //verify it the owner
              if (Principal.equal(caller, house.owner)) {
                 let bufferArray=Buffer.fromArray<House>(found.houses);

                  let newbuffer=Buffer.mapFilter<House,House>(bufferArray,func(x){

              if(x.id==houseid){
                 null;
              }else{
                ?x
              }
             });
              let newarray=Buffer.toArray(newbuffer);

              let updateduser:User={
                id=caller;
                houses=newarray;
              };
              houseowners.put(caller,updateduser);
                housestorages.delete(houseid);
                return "deleted"
              };
              return "failed";
          }
        }
      }
    }
  };

  //get all available houses
  public query func get_all_houses():async [House]{

    return Iter.toArray(housestorages.vals())
  };

  //get houses based on house id

  public query func get_house(houseid:Text):async Result.Result<?House,Text>{

    switch(housestorages.get(houseid)){
      case (null){
        return #err("house not found")
      };
      case (?found){
        return #ok(?found)
      }
    }
  };

  //get my houses
  public shared ({caller}) func get_my_houses():async Result.Result<User,Text>{

    switch(houseowners.get(caller)){
      case (null){
        return #err("failed")
      };
      case(?found){
        return #ok(found)
      }
    }
  }


};
