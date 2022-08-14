---
title: 'PID controller'
abstract: 'Control loop in C'
date: '2022-08-10'
keywords: 'mechanic, engineering, lego, clang'
image: 'images/posts/bkgnd/arun-prakash-8GVM5TvexGQ-unsplash.jpg'
---

## PID - PROPORTIONAL–INTEGRAL–DERIVATIVE CONTROLLER

Feedback based control loop mechanism used to control systems requiring continuously modulated control
Used when requiring accurate and optimized automatic control
The PID controller 
- continuously calculates an error value e(t) = desired setpoint (SP) - measured process variable (PV)
- applies a correction based on proportional, integral, and derivative terms (denoted P, I, D)
- Ex: cruise control on a car
- hill ascending = lower speed if only constant engine power were applied
- PID algorithm will increase engine speed to target the measured speed to the desired speed with minimal delay.
- Historic: 1920, automatic steering systems for ships

![PID](../images/posts/pid.png)

PID.h
```c
#ifndef PID_CONTROLLER_H
#define PID_CONTROLLER_H

typedef struct {

	/* Controller gains */
	float Kp;
	float Ki;
	float Kd;

	/* Derivative low-pass filter time constant */
	float tau;

	/* Output limits */
	float limMin;
	float limMax;
	
	/* Integrator limits */
	float limMinInt;
	float limMaxInt;

	/* Sample time (in seconds) */
	float T;

	/* Controller "memory" */
	float integrator;
	float prevError;			/* Required for integrator */
	float differentiator;
	float prevMeasurement;		/* Required for differentiator */

	/* Controller output */
	float out;

} PIDController;

void  PIDController_Init(PIDController *pid);
float PIDController_Update(PIDController *pid, float setpoint, float measurement);

#endif
```

```c
#include "PID.h"

void PIDController_Init(PIDController *pid) {

	/* Clear controller variables */
	pid->integrator = 0.0f;
	pid->prevError  = 0.0f;

	pid->differentiator  = 0.0f;
	pid->prevMeasurement = 0.0f;

	pid->out = 0.0f;

}

float PIDController_Update(PIDController *pid, float setpoint, float measurement) {

	/*
	* Error signal
	*/
    float error = setpoint - measurement;


	/*
	* Proportional
	*/
    float proportional = pid->Kp * error;


	/*
	* Integral
	*/
    pid->integrator = pid->integrator + 0.5f * pid->Ki * pid->T * (error + pid->prevError);

	/* Anti-wind-up via integrator clamping */
    if (pid->integrator > pid->limMaxInt) {

        pid->integrator = pid->limMaxInt;

    } else if (pid->integrator < pid->limMinInt) {

        pid->integrator = pid->limMinInt;

    }


	/*
	* Derivative (band-limited differentiator)
	*/
		
    pid->differentiator = -(2.0f * pid->Kd * (measurement - pid->prevMeasurement)	/* Note: derivative on measurement, therefore minus sign in front of equation! */
                        + (2.0f * pid->tau - pid->T) * pid->differentiator)
                        / (2.0f * pid->tau + pid->T);


	/*
	* Compute output and apply limits
	*/
    pid->out = proportional + pid->integrator + pid->differentiator;

    if (pid->out > pid->limMax) {

        pid->out = pid->limMax;

    } else if (pid->out < pid->limMin) {

        pid->out = pid->limMin;

    }

	/* Store error and measurement for later use */
    pid->prevError       = error;
    pid->prevMeasurement = measurement;

	/* Return controller output */
    return pid->out;

}
```

- https://github.com/pms67/PID
- https://github.com/pms67/ControlSystemDesign-Tutorial/tree/master/BalancedAeropendulum

[PID Controller in C](https://www.youtube.com/watch?v=zOByx3Izf5U)

### More

- https://en.wikipedia.org/wiki/PID_controller

[Kalman filter-based IMU-inertial measurement units](https://www.bzarg.com/p/improving-imu-attitude-estimates-with-velocity-data/)
Automatic differentiation makes a linearized extended Kalman filter (EKF) particularly easy and robust to implement.

#### Credits

Photo by <a href="https://unsplash.com/es/@its_arunprakash?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Arun Prakash</a> on <a href="https://unsplash.com/s/photos/sensors?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  