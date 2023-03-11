import 'package:flutter/material.dart';

class LoadingScreen extends StatelessWidget {
  const LoadingScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF003249),
      // appBar: AppBar(
      //   title: const Text('First Screen'),
      // ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          // ignore: prefer_const_literals_to_create_immutables
          children: [
            const Image(
              image: AssetImage('assets/imgs/logo.png'),
              width: 200, // specify the width of the image
              height: 200, // specify the height of the image
              fit: BoxFit
                  .cover, // specify how the image should be resized to fit its container
            ),
            const Text(
              '..يَداً بِيَدٍ',
              style: TextStyle(
                fontSize: 26,
                color: Colors.white,
              ),
            ),
            const Text(
              'نَبْني مُجْتَمَعٍ أَفْضَل',
              style: TextStyle(
                fontSize: 24,
                color: Colors.white,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
