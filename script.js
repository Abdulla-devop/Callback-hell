const print = (message, cb = () => {}) => {
    console.log(message);
    cb();
}
print(10, () =>
               print(9, () => 
                      print(8, () =>
                            print(7, () => 
                                  print(6, () => 
                                        print(5, () => 
                                              print(4, () => 
                                                    print(3,() =>
                                                          print(2, () => 
                                                                print(1, () => {
                                                                console.log ("Happy Idependence Day")
                                                            }
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    );