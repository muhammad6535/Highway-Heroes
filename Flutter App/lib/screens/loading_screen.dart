import 'package:flutter/material.dart';

class LoadingScreen extends StatelessWidget {
  const LoadingScreen({Key? key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF003249),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: const [
            Image(
              image: AssetImage('assets/imgs/logo.png'),
              width: 200,
              height: 200,
              fit: BoxFit.cover,
            ),
            Text(
              '..يَداً بِيَدٍ',
              style: TextStyle(
                fontSize: 26,
                color: Colors.white,
              ),
            ),
            Text(
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