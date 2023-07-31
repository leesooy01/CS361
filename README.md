# CS361
This program uses text files in order to determine if the password is part of the most common passwords used or not. Once a password is generated, the password will be saved to input.txt. The microservice then will determine if the password is within the top 15 most commonly used passwords. It will then print the result by saving the result to output.txt. This is done by a "watcher" which will check whenever input.txt has been modified or changed. An example call is shown below:

    initial_modification_time = os.path.getmtime(input_file)

    while True:

      current_modification_time = os.path.getmtime(input_file)
  
      if current_modification_time > initial_modification_time:
          print("Running the password checker...")
          Popen(["sys.executable", script_to_run])
          initial_modification_time = current_modification_time
  
      time.sleep(1)

UML Sequence diagram: 

![photo](https://github.com/leesooy01/CS361/assets/122393258/a68ea8bc-4047-403f-88c0-398edba783a0)
