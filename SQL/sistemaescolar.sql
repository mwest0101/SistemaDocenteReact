-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 30-07-2021 a las 08:22:34
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 7.4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sistemaescolar`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `messages`
--

CREATE TABLE `messages` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `message` text COLLATE armscii8_bin DEFAULT NULL,
  `date` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin;

--
-- Volcado de datos para la tabla `messages`
--

INSERT INTO `messages` (`id`, `user_id`, `message`, `date`) VALUES
(5, 1, 'hola', '2020-12-22 22:40:44'),
(6, 2, 'como estan', '2020-12-22 22:41:15'),
(7, 5, 'Bien', '2020-12-22 22:41:53'),
(8, 5, 'Uds?', '2020-12-22 22:42:08'),
(10, 1, 'hola', '2020-12-23 00:35:20'),
(11, 1, 'como estan?', '2020-12-23 00:36:17'),
(12, 1, 'que hicieron ayer', '2020-12-23 00:38:02'),
(13, 1, 'hola', '2021-02-18 00:55:16'),
(14, 1, 'como estas??', '2021-02-18 00:55:23'),
(15, 3, 'asd', '2021-02-18 01:15:51'),
(16, 1, 'Hola amigos', '2021-07-17 20:59:09'),
(17, 1, 'Hola como estan 10', '2021-07-19 01:19:59'),
(18, 1, 'Hola como estan 10', '2021-07-19 01:30:02'),
(19, 1, 'hola', '2021-07-19 01:33:49'),
(20, 1, 'hola', '2021-07-19 01:36:29'),
(21, 1, 'hola', '2021-07-19 01:36:43'),
(22, 35, 'hola', '2021-07-29 20:49:25'),
(23, 35, 'hola 2021', '2021-07-29 20:49:44'),
(24, 35, 'dsf', '2021-07-29 21:47:42'),
(25, 35, 'asdasdasdasdasd', '2021-07-29 22:09:29'),
(26, 35, 'sdf', '2021-07-29 22:33:33'),
(27, 35, 'sdf', '2021-07-29 22:33:47'),
(28, 35, 'sdf', '2021-07-29 22:33:48'),
(29, 35, 'Hola como estas?', '2021-07-29 22:35:02'),
(30, 35, 'cualquier cosa', '2021-07-29 22:35:51'),
(31, 35, 'cualquier cosa', '2021-07-29 22:35:55'),
(32, 35, 'cualquier cosa', '2021-07-29 22:36:00'),
(33, 35, 'cualquier cosa', '2021-07-29 22:36:24'),
(34, 35, 'cualquier cosa4', '2021-07-29 22:36:34'),
(35, 35, 'hola', '2021-07-29 22:38:48'),
(36, 35, 'hola3', '2021-07-29 22:40:32'),
(37, 35, 'hola4', '2021-07-29 22:40:45'),
(38, 35, 'hola5', '2021-07-30 01:49:34'),
(39, 35, 'hola 6', '2021-07-30 02:59:29');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `usuario` varchar(50) COLLATE armscii8_bin DEFAULT NULL,
  `nombre` varchar(100) COLLATE armscii8_bin DEFAULT NULL,
  `apellido` varchar(100) COLLATE armscii8_bin DEFAULT NULL,
  `dni` text COLLATE armscii8_bin DEFAULT NULL,
  `condicion` varchar(50) COLLATE armscii8_bin DEFAULT 'alumno',
  `password` varchar(50) COLLATE armscii8_bin DEFAULT '123456',
  `fechaIng` datetime NOT NULL DEFAULT current_timestamp(),
  `enabled` tinyint(1) DEFAULT 0,
  `confCorreo` varchar(100) COLLATE armscii8_bin DEFAULT NULL,
  `email` varchar(255) COLLATE armscii8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `usuario`, `nombre`, `apellido`, `dni`, `condicion`, `password`, `fechaIng`, `enabled`, `confCorreo`, `email`) VALUES
(1, 'mauri', 'ben', 'stiller', '12', 'alumno', '7c4a8d09ca3762af61e59520943dc26494f8941b', '2021-07-16 21:53:42', 0, '019acda9-304f-4c0e-9796-27b5ecf6b961', 'mauriciowest@gmail.com'),
(2, 'beni', 'ben', 'stiller', '12', 'alumno', '7c4a8d09ca3762af61e59520943dc26494f8941b', '2021-02-18 01:13:40', 1, '019acda9-304f-4c0e-9796-27b5ecf6b961', 'mauriciowest@gmail.com'),
(3, 'pep', 'Pepe', 'Argento', '12320123', 'Profesor', '7c4a8d09ca3762af61e59520943dc26494f8941b', '2021-07-16 21:54:08', 0, '019acda9-304f-4c0e-9796-27b5ecf6b961', 'mauriciowest@gmail.com'),
(4, 'joh', 'Johny', 'Tolengo', '12234542', 'alumno', '7c4a8d09ca3762af61e59520943dc26494f8941b', '2020-12-22 22:39:35', 1, '019acda9-304f-4c0e-9796-27b5ecf6b961', 'mauriciowest@gmail.com'),
(5, 'mis', 'Mister', 'Bean', '12021012', 'Profesor', '7c4a8d09ca3762af61e59520943dc26494f8941b', '2020-12-22 22:39:35', 1, '019acda9-304f-4c0e-9796-27b5ecf6b961', 'mauriciowest@gmail.com'),
(35, 'mauri', 'mauricio9', 'stiller9', '99999999', 'alumno29', '7c4a8d09ca3762af61e59520943dc26494f8941b', '2021-05-05 17:39:20', 1, '019acda9-304f-4c0e-9796-27b5ecf6b961', 'mauriciowest@gmail.com'),
(41, 'Pab', 'Pablo', 'Perez', '24123123', 'director', '7c4a8d09ca3762af61e59520943dc26494f8941b', '2021-05-05 17:43:44', 0, '019acda9-304f-4c0e-9796-27b5ecf6b961', 'mauriciowest@gmail.com'),
(96, 'cin', 'cintia', 'carola', '26535453', 'profesor', '7c4a8d09ca3762af61e59520943dc26494f8941b', '2021-07-21 03:33:04', 0, 'e8c2eb97-50d0-4245-9718-26db49c65a5a', 'mauriciowest@gmail.com'),
(127, 'discovery', 'startrek', 'next generation', '123123123', 'alumno', '7c4a8d09ca3762af61e59520943dc26494f8941b', '2021-07-30 03:00:07', 0, 'af127991-817f-4f83-bcf4-c085c75b7450', 'mauriciowest@gmail.com'),
(128, 'voyager', 'asdasd', 'asd', '23423423', 'sdfsd', '7c4a8d09ca3762af61e59520943dc26494f8941b', '2021-07-30 03:18:49', 0, '95073764-97bf-4efa-a6fe-75aa0e3219d7', 'mauriciowest@gmail.com');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `Índice 2` (`user_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=129;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `FK_messages_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
